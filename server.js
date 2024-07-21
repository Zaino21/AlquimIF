const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    // Configurações opcionais
    cors: {
        origin: "*", // Ajuste conforme necessário para restringir acesso
        methods: ["GET", "POST"]
    }
});

const musicDirectory = path.join(__dirname, 'music');
const dataFilePath = path.join(__dirname, 'data.json');

function readDataFile() {
    try {
        const data = fs.readFileSync(dataFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data file:', error);
        return { rooms: {}, playerProfiles: {} };
    }
}

function writeDataFile(data) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data file:', error);
    }
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/music', express.static(musicDirectory));

app.get('/api/music', (req, res) => {
    console.log('GET /api/music');
    fs.readdir(musicDirectory, (err, files) => {
        if (err) {
            console.error('Unable to scan directory:', err);
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        const musicFiles = files.filter(file => path.extname(file) === '.mp3');
        res.json(musicFiles);
    });
});

app.post('/api/profile', (req, res) => {
    console.log('POST /api/profile', req.body);
    const { nickname, music, player } = req.body;
    try {
        let data = readDataFile();
        data.playerProfiles[player] = { nickname, music };
        writeDataFile(data);
        console.log(`Profile created for player: ${player}`);
        res.sendStatus(200);
    } catch (err) {
        console.error('Error creating profile:', err);
        res.status(500).send('Error creating profile');
    }
});

// WebSockets handling
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('createRoom', (data) => {
        console.log('createRoom', data);
        let { room, creator, maxPlayers, isPublic } = data;
        let roomsData = readDataFile();
        if (roomsData.rooms[room]) {
            socket.emit('roomCreationError', 'Room already exists');
        } else {
            roomsData.rooms[room] = {
                name: room,
                creator,
                players: [creator],
                maxPlayers,
                public: isPublic,
                status: 'waiting',
                playerInfo: { [creator]: roomsData.playerProfiles[creator] }
            };
            writeDataFile(roomsData);
            socket.join(room);
            socket.emit('roomCreated', room);
            console.log(`Room "${room}" created successfully by ${creator}.`);
        }
    });

    socket.on('joinRoom', (data) => {
        console.log('joinRoom', data);
        let { room, player } = data;
        let roomsData = readDataFile();
        if (roomsData.rooms[room]) {
            if (roomsData.rooms[room].players.length < roomsData.rooms[room].maxPlayers) {
                roomsData.rooms[room].players.push(player);
                roomsData.rooms[room].playerInfo[player] = roomsData.playerProfiles[player];
                writeDataFile(roomsData);
                socket.join(room);
                io.to(room).emit('playerJoined', player);
                console.log(`Player "${player}" joined room "${room}".`);
            } else {
                socket.emit('joinRoomError', 'Room is full');
            }
        } else {
            socket.emit('joinRoomError', 'Room not found');
        }
    });

    socket.on('leaveRoom', (data) => {
        console.log('leaveRoom', data);
        let { room, player } = data;
        let roomsData = readDataFile();
        if (roomsData.rooms[room]) {
            roomsData.rooms[room].players = roomsData.rooms[room].players.filter(p => p !== player);
            delete roomsData.rooms[room].playerInfo[player];
            if (roomsData.rooms[room].players.length === 0) {
                delete roomsData.rooms[room];
                console.log(`Room "${room}" deleted as it became empty.`);
            }
            writeDataFile(roomsData);
            socket.leave(room);
            io.to(room).emit('playerLeft', player);
        } else {
            socket.emit('leaveRoomError', 'Room not found');
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const port = process.env.PORT || 8080;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});
