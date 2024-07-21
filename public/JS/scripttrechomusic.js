// scripttrechomusic.js

document.addEventListener('DOMContentLoaded', () => {
    const musicSelect = document.getElementById('musicSelect');
    const musicSlider = document.getElementById('musicSlider');
    const playPauseButton = document.getElementById('playPauseButton');
    const currentTimeDisplay = document.getElementById('currentTimeDisplay');
    const durationDisplay = document.getElementById('durationDisplay');
    const sliderStartTime = document.getElementById('sliderStartTime');
    const sliderEndTime = document.getElementById('sliderEndTime');

    let audioObject = null;
    let isPlaying = false;

    // Carregar arquivos de música de music.json
    const loadMusicFiles = async () => {
        try {
            const url = '/music.json'; // Caminho relativo para o arquivo JSON
            console.log(`Carregando arquivos de música de: ${url}`);
            const response = await fetch(url);
            if (response.ok) {
                const musicFiles = await response.json();
                // Limpar opções existentes, exceto a opção padrão
                while (musicSelect.children.length > 1) {
                    musicSelect.removeChild(musicSelect.lastChild);
                }
                // Adicionar novas opções
                musicFiles.forEach(music => {
                    const option = document.createElement('option');
                    option.value = `/music/${music}`;
                    option.textContent = music.replace(/.mp3$/, '');
                    musicSelect.appendChild(option);
                });
            } else {
                console.error('Erro ao carregar arquivos de música:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao carregar arquivos de música:', error);
        }
    };

    // Atualizar objeto de áudio e slider quando um arquivo de música é selecionado
    musicSelect.addEventListener('change', () => {
        const musicFile = musicSelect.value;
        if (musicFile) {
            setupAudio(musicFile);
        } else {
            resetAudio();
        }
    });

    // Manipular input do slider para o tempo de início do segmento de música
    musicSlider.addEventListener('input', () => {
        updateSliderTime(musicSlider.value);
    });

    // Tocar ou pausar o áudio
    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });

    // Configurar objeto de áudio
    const setupAudio = (musicPath) => {
        if (audioObject) {
            audioObject.pause();
        }
        audioObject = new Audio(musicPath);
        audioObject.addEventListener('loadedmetadata', () => {
            const duration = Math.min(audioObject.duration, 30);
            musicSlider.max = Math.max(0, audioObject.duration - 30);
            durationDisplay.textContent = formatTime(duration);
            updateSliderTime(0);
            playPauseButton.disabled = false;
        });
        audioObject.addEventListener('timeupdate', () => {
            if (audioObject.currentTime >= parseFloat(musicSlider.value) + 30) {
                pauseAudio();
                audioObject.currentTime = parseFloat(musicSlider.value);
            }
            updateCurrentTimeDisplay();
        });
        audioObject.addEventListener('ended', () => {
            isPlaying = false;
            playPauseButton.textContent = 'Reproduzir';
        });
    };

    // Resetar configurações de áudio
    const resetAudio = () => {
        if (audioObject) {
            audioObject.pause();
            audioObject = null;
        }
        currentTimeDisplay.textContent = "00:00";
        durationDisplay.textContent = "00:00";
        playPauseButton.disabled = true;
        playPauseButton.textContent = "Reproduzir";
        musicSlider.value = 0;
        sliderStartTime.textContent = "00:00";
        sliderEndTime.textContent = "00:30";
    };

    // Atualizar exibição de tempo atual
    const updateCurrentTimeDisplay = () => {
        const currentTime = audioObject ? audioObject.currentTime - parseFloat(musicSlider.value) : 0;
        currentTimeDisplay.textContent = formatTime(currentTime);
    };

    // Atualizar exibição de tempo do slider
    const updateSliderTime = (start) => {
        sliderStartTime.textContent = formatTime(start);
        sliderEndTime.textContent = formatTime(Math.min(parseFloat(start) + 30, audioObject.duration));
    };

    // Tocar o segmento de áudio
    const playAudio = () => {
        if (audioObject) {
            audioObject.currentTime = parseFloat(musicSlider.value);
            audioObject.play();
            isPlaying = true;
            playPauseButton.textContent = 'Pausar';
        }
    };

    // Pausar o áudio
    const pauseAudio = () => {
        if (audioObject) {
            audioObject.pause();
            isPlaying = false;
            playPauseButton.textContent = 'Reproduzir';
        }
    };

    // Formatar tempo para MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    // Inicializar com a opção padrão
    const initializeMusicSelect = () => {
        // Remover todas as opções existentes primeiro
        while (musicSelect.firstChild) {
            musicSelect.removeChild(musicSelect.firstChild);
        }
        // Adicionar a opção padrão
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Selecione uma música";
        musicSelect.appendChild(defaultOption);
    };

    // Inicializar
    initializeMusicSelect();
    loadMusicFiles();
    playPauseButton.disabled = true;
});
