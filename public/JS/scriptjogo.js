document.addEventListener("DOMContentLoaded", function () {
    const perguntaElement = document.getElementById('pergunta');
    const opcoesElements = document.querySelectorAll('.opcao');
    const contadorElement = document.getElementById('contador');
    const pontosElement = document.getElementById('pontos'); // Elemento para exibir os pontos
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let perguntas = [];
    let perguntasTeoricas = [];
    let perguntasPraticas = [];
    let perguntaAtualIndex = 0;
    let contadorTempo;
    let tempoRestante;
    let acertos = 0;
    let erros = 0;
    let respostas = [];
    let pontos = 0;
    let streak = 0;

    let tipoPerguntas = urlParams.get('tipoPerguntas');
    let temaPerguntas = urlParams.get('temaPerguntas');
    let tempoTeoricas = parseInt(urlParams.get('tempoTeoricas'), 10);
    let tempoPraticas = parseInt(urlParams.get('tempoPraticas'), 10);
    let quedaPontosPraticas = parseInt(urlParams.get('quedaPontosPraticas'), 10);
    let numPerguntas = parseInt(urlParams.get('numPerguntas'), 10);

    console.log("Configurações carregadas:", {
        tipoPerguntas,
        temaPerguntas,
        tempoTeoricas,
        tempoPraticas,
        quedaPontosPraticas,
        numPerguntas
    });

    function carregarPerguntas() {
        switch (temaPerguntas) {
            case "Química Geral":
                perguntas = perguntasQuimicaGeral;
                break;
            case "Equilíbrio Químico":
                perguntas = perguntasEquilibrioQuimico;
                break;
            case "Cinética Química":
                perguntas = perguntasCineticaQuimica;
                break;
            default:
                alert("Tema não reconhecido!");
                return;
        }

        perguntasTeoricas = perguntas.filter(pergunta => pergunta.tipo === "teorica");
        perguntasPraticas = perguntas.filter(pergunta => pergunta.tipo === "pratica");

        if (tipoPerguntas === "teoricas") {
            embaralharArray(perguntasTeoricas);
            perguntas = perguntasTeoricas.slice(0, numPerguntas);
        } else if (tipoPerguntas === "praticas") {
            embaralharArray(perguntasPraticas);
            perguntas = perguntasPraticas.slice(0, numPerguntas);
        } else if (tipoPerguntas === "mistas") {
            const numTeoricas = Math.ceil(numPerguntas / 2);
            const numPraticas = Math.floor(numPerguntas / 2);

            embaralharArray(perguntasTeoricas);
            embaralharArray(perguntasPraticas);

            perguntas = perguntasTeoricas.slice(0, numTeoricas).concat(perguntasPraticas.slice(0, numPraticas));
        }
    }

    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function mostrarPergunta() {
        const pergunta = perguntas[perguntaAtualIndex];
        perguntaElement.textContent = `Pergunta ${perguntaAtualIndex + 1}: ${pergunta.pergunta}`;

        const opcoesChaves = Object.keys(pergunta.opcoes);
        embaralharArray(opcoesChaves);

        opcoesElements.forEach((botao, index) => {
            const opcao = opcoesChaves[index];
            botao.textContent = pergunta.opcoes[opcao];
            botao.setAttribute('data-resposta', opcao);
        });

        tempoRestante = pergunta.tipo === "teorica" ? tempoTeoricas : tempoPraticas;
        iniciarContador();
    }

    function iniciarContador() {
        contadorElement.textContent = tempoRestante;
        clearInterval(contadorTempo);
        contadorTempo = setInterval(() => {
            tempoRestante--;
            contadorElement.textContent = tempoRestante;
            if (tempoRestante <= 0) {
                clearInterval(contadorTempo);
                avancarParaProximaPergunta(false);
            }
        }, 1000);
    }

    function verificarResposta(event) {
        const botao = event.target;
        const resposta = botao.getAttribute('data-resposta');
        const pergunta = perguntas[perguntaAtualIndex];
        const correta = resposta === pergunta.resposta;
        const tempoUsado = pergunta.tipo === "teorica" ? tempoTeoricas - tempoRestante : tempoPraticas - tempoRestante;

        if (correta) {
            acertos++;
            streak++;
            const pontosGanho = calcularPontos(tempoUsado, streak);
            pontos += pontosGanho;
            respostas.push({
                numero: perguntaAtualIndex + 1,
                correta: true,
                respostaDada: resposta,
                respostaCerta: pergunta.resposta,
                pergunta: pergunta.pergunta,
                pontos: pontosGanho
            });
            mostrarSinalizacao("correto");
        } else {
            erros++;
            streak = 0;
            respostas.push({
                numero: perguntaAtualIndex + 1,
                correta: false,
                respostaDada: resposta,
                respostaCerta: pergunta.resposta,
                pergunta: pergunta.pergunta,
                pontos: 0
            });
            mostrarSinalizacao("incorreto");
        }

        animarPontuacao(pontosElement, pontos); // Atualizar pontos na interface com animação
        avancarParaProximaPergunta(true);
    }

    function calcularPontos(tempoUsado, streak) {
        const basePontos = 100;
        const pontosTempo = Math.max(0, 30 - tempoUsado);
        const pontosStreak = streak > 1 ? streak * 10 : 0;
        return basePontos + pontosTempo + pontosStreak;
    }

    function mostrarSinalizacao(tipo) {
        const sinalizacao = document.createElement('div');
        sinalizacao.className = `sinalizacao ${tipo}`;
        sinalizacao.textContent = tipo === "correto" ? "✔️ Correto!" : "❌ Incorreto!";
        document.body.appendChild(sinalizacao);
        setTimeout(() => sinalizacao.remove(), 1000);
    }

    function avancarParaProximaPergunta(respondeu) {
        if (!respondeu) {
            erros++;
            streak = 0;
            respostas.push({
                numero: perguntaAtualIndex + 1,
                correta: false,
                respostaDada: null,
                respostaCerta: perguntas[perguntaAtualIndex].resposta,
                pergunta: perguntas[perguntaAtualIndex].pergunta,
                pontos: 0
            });
        }

        perguntaAtualIndex++;
        if (perguntaAtualIndex < perguntas.length) {
            mostrarPergunta();
        } else {
            clearInterval(contadorTempo);
            // Adiciona um atraso de 2 segundos antes de mostrar o popup dos resultados
            setTimeout(mostrarResultados, 2000);
        }
    }

    function mostrarResultados() {
        const resultPopup = document.getElementById('result-popup');
        resultPopup.classList.remove('hidden');
        resultPopup.classList.add('visible');
        document.getElementById('resultado-acertos-popup').textContent = `Acertos: ${acertos}`;
        document.getElementById('resultado-erros-popup').textContent = `Erros: ${erros}`;
        document.getElementById('resultado-pontos-popup').textContent = `Pontos: ${pontos}`;

        const profileData = JSON.parse(sessionStorage.getItem('profileData'));
        if (profileData) {
            setupPopupAudioPlayer(profileData);
            document.getElementById('profilePicPopup').src = profileData.profilePic || '';
            document.getElementById('nicknamePopup').textContent = profileData.nickname || '';
        }
    }

    function animarPontuacao(element, pontosFinais) {
        let pontosIniciais = parseInt(element.textContent, 10);
        const incremento = Math.ceil((pontosFinais - pontosIniciais) / 30); // 30 passos para a animação
        const intervaloAnimacao = setInterval(() => {
            pontosIniciais += incremento;
            if (pontosIniciais >= pontosFinais) {
                clearInterval(intervaloAnimacao);
                pontosIniciais = pontosFinais;
            }
            element.textContent = pontosIniciais;
        }, 30);
    }

    const popupAudioPlayer = document.getElementById('popupAudioPlayer');
    const popupPlayPauseButton = document.getElementById('popupPlayPauseButton');
    const popupCurrentTimeDisplay = document.getElementById('popupCurrentTimeDisplay');
    const popupDurationDisplay = document.getElementById('popupDurationDisplay');
    const audioElement = new Audio();
    let profileMusic, profileMusicStart, isPlaying = false;

    function setupPopupAudioPlayer(profileData) {
        if (profileData.profileMusic) {
            profileMusic = profileData.profileMusic;
            profileMusicStart = profileData.profileMusicStart || 0;
            audioElement.src = `${profileMusic}#t=${profileMusicStart}`;
            audioElement.currentTime = profileMusicStart;
            audioElement.play();
            isPlaying = true;
            popupPlayPauseButton.textContent = 'Pausar';
            popupDurationDisplay.textContent = '00:30';
            audioElement.addEventListener('timeupdate', () => {
                const currentTime = audioElement.currentTime - profileMusicStart;
                if (currentTime >= 30) {
                    audioElement.pause();
                    isPlaying = false;
                    popupPlayPauseButton.textContent = 'Reproduzir';
                } else {
                    popupCurrentTimeDisplay.textContent = formatTime(currentTime);
                }
            });
        }
    }

    function togglePopupPlayPause() {
        if (isPlaying) {
            audioElement.pause();
            popupPlayPauseButton.textContent = 'Reproduzir';
        } else {
            audioElement.currentTime = profileMusicStart;
            audioElement.play();
            popupPlayPauseButton.textContent = 'Pausar';
        }
        isPlaying = !isPlaying;
    }

    popupPlayPauseButton.addEventListener('click', togglePopupPlayPause);

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    opcoesElements.forEach(botao => {
        botao.addEventListener('click', verificarResposta);
    });

    carregarPerguntas();
    mostrarPergunta();

    const closePopup = document.querySelector('.result-popup .close');
    closePopup.addEventListener('click', () => {
        document.getElementById('result-popup').classList.add('hidden');
        document.getElementById('result-popup').classList.remove('visible');
        audioElement.pause();
    });

});
