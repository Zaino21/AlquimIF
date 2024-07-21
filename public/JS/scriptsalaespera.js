// scriptsalaespera.js

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nomeSala = urlParams.get("nomeSala");
    const playerName = urlParams.get("playerName");
    const playersList = document.getElementById("players-list");
    const startGameBtn = document.getElementById("start-game-btn");
    const backBtn = document.getElementById("back-btn");
    const readyBtn = document.getElementById("ready-btn");

    let players = [];
    let creator = "";
    let readyPlayers = new Set();
    const baseURL = window.location.origin;

    function updatePlayerList() {
        playersList.innerHTML = "";
        players.forEach(player => {
            const li = document.createElement("li");
            li.textContent = player;
            if (player === creator) {
                const crown = document.createElement("span");
                crown.textContent = " 👑";
                li.appendChild(crown);
            }
            if (readyPlayers.has(player)) {
                const readyText = document.createElement("span");
                readyText.textContent = " ✅";
                li.appendChild(readyText);
            }
            playersList.appendChild(li);
        });
        console.log("Players list updated:", players);
        if (players.length >= 2 && playerName === creator && readyPlayers.size === players.length) {
            startGameBtn.style.display = "block";
        } else {
            startGameBtn.style.display = "none";
        }
    }

    function getRoomInfo() {
        fetch(`${baseURL}/api/rooms`)
            .then(response => response.json())
            .then(data => {
                const room = data[nomeSala];
                if (room) {
                    players = room.players || [];
                    creator = room.creator || "";
                    readyPlayers = new Set(room.readyPlayers || []);
                    console.log(`Room info retrieved for room "${nomeSala}":`, room);
                    updatePlayerList();
                } else {
                    console.error(`Room "${nomeSala}" not found, redirecting to index.html.`);
                    window.location.href = "index.html";
                }
            })
            .catch(error => {
                console.error('Error fetching room info:', error);
                window.location.href = "index.html";
            });
    }

    if (readyBtn) {
        readyBtn.addEventListener("click", function () {
            readyPlayers.add(playerName);
            console.log(`Player "${playerName}" is ready.`);
            updatePlayerList();
            const payload = { room: nomeSala, readyPlayers: Array.from(readyPlayers) };
            fetch(`${baseURL}/api/updateReadyStatus`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).then(response => {
                if (!response.ok) throw new Error('Erro ao atualizar status de pronto');
                console.log('Status de pronto atualizado com sucesso.');
            }).catch(error => console.error('Error updating ready status:', error));
        });
    }

    startGameBtn.addEventListener("click", function () {
        alert("O jogo vai começar!");
        window.location.href = "pagjogo.html";
    });

    backBtn.addEventListener("click", function () {
        fetch(`${baseURL}/api/leaveRoom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ room: nomeSala, player: playerName })
        }).then(() => {
            console.log(`Player "${playerName}" left room "${nomeSala}".`);
            window.location.href = "index.html";
        }).catch(error => {
            console.error("Erro ao sair da sala:", error);
            alert("Erro ao sair da sala.");
        });
    });

    getRoomInfo();
    setInterval(getRoomInfo, 5000);
});
