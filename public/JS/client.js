document.addEventListener("DOMContentLoaded", function () {
    const socket = io('https://00f6-2804-29b8-5020-4489-d454-5647-fd0-bd45.ngrok-free.app');

    const joinGameButton = document.getElementById('join-game');
    const videoContainer = document.getElementById('video-container');
    let localStream;
    let peers = {};

    joinGameButton.addEventListener('click', () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            localStream = stream;
            const video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            videoContainer.appendChild(video);

            socket.emit('joinGame', { id: socket.id });

            socket.on('playerJoined', (data) => {
                const peer = createPeer(data.id, socket.id);
                peers[data.id] = peer;
                localStream.getTracks().forEach(track => peer.addTrack(track, localStream));
            });

            socket.on('signal', (data) => {
                const peer = peers[data.from] || createPeer(data.from, socket.id);
                peer.signal(data.signal);
            });
        });
    });

    function createPeer(remoteSocketId, localSocketId) {
        const peer = new SimplePeer({
            initiator: localSocketId < remoteSocketId,
            trickle: false,
        });

        peer.on('signal', (signal) => {
            socket.emit('signal', { signal, to: remoteSocketId, from: localSocketId });
        });

        peer.on('stream', (stream) => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            videoContainer.appendChild(video);
        });

        return peer;
    }
});
