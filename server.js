const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    socket.on('createRoom', (data) => {
        console.log('createRoom', data);
        // Implementar lógica de criação de sala
    });

    socket.on('joinRoom', (data) => {
        console.log('joinRoom', data);
        // Implementar lógica de entrada de sala
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
    });
});

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
