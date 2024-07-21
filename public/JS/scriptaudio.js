document.addEventListener('DOMContentLoaded', function () {
    const players = document.querySelectorAll('.custom-audio-player');

    players.forEach(player => {
        const button = player.querySelector('.play-pause');
        const timeDisplay = player.querySelector('.time-display');
        const audioSrc = player.dataset.audioSrc;
        const audio = new Audio(audioSrc);

        let playing = false;

        button.addEventListener('click', function () {
            if (playing) {
                audio.pause();
                button.textContent = 'Reproduzir';
            } else {
                audio.play();
                button.textContent = 'Pausar';
            }
            playing = !playing;
        });

        audio.addEventListener('loadedmetadata', function () {
            timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
        });

        audio.addEventListener('timeupdate', function () {
            const currentTime = audio.currentTime;
            timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(audio.duration)}`;
        });

        audio.addEventListener('ended', function () {
            audio.currentTime = 0;
            button.textContent = 'Reproduzir';
            playing = false;
        });

        function formatTime(seconds) {
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }
    });
});
