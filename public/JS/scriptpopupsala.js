document.addEventListener("DOMContentLoaded", function () {
    var jogarBtn = document.getElementById("jogar-btn");
    var popupSala = document.getElementById("popup-sala");
    var closeBtn = document.querySelector(".close-btn");
    var opcaoJogarSozinho = document.getElementById("opcao-jogar-sozinho");
    var formJogarSozinho = document.getElementById("form-jogar-sozinho");
    var opcaoCriarSala = document.getElementById("opcao-criar-sala");
    var formCriarSala = document.getElementById("form-criar-sala");
    var opcaoEntrarSala = document.getElementById("opcao-entrar-sala");
    var formEntrarSala = document.getElementById("form-entrar-sala");
    var listaSalasPublicas = document.getElementById("lista-salas-publicas");
    var publicoPrivadoSelect = document.getElementById("publico-privado");
    var senhaContainer = document.getElementById("senha-container");
    var tipoPerguntasSelect = document.getElementById("tipo-perguntas");
    var tipoPerguntasSozinhoSelect = document.getElementById("tipo-perguntas-sozinho");
    var perguntasTeoricasElements = document.querySelectorAll('.perguntas-teoricas');
    var perguntasPraticasElements = document.querySelectorAll('.perguntas-praticas');
    var perguntasTeoricasSozinhoElements = document.querySelectorAll('.perguntas-teoricas-sozinho');
    var perguntasPraticasSozinhoElements = document.querySelectorAll('.perguntas-praticas-sozinho');
    var formEntrarSalaPrivada = document.getElementById("form-entrar-sala-privada");

    // Adicionar a funcionalidade de WebSockets
    var socket = io();

    function esconderFormularios() {
        formJogarSozinho.style.display = "none";
        formCriarSala.style.display = "none";
        formEntrarSala.style.display = "none";
    }

    function desativarBotoes() {
        var botoesOpcoesJogo = document.querySelectorAll(".opcoes-jogo button");
        botoesOpcoesJogo.forEach(function (botao) {
            botao.classList.remove("active");
        });
    }

    if (jogarBtn) {
        jogarBtn.addEventListener("click", function (e) {
            e.preventDefault();
            popupSala.classList.remove("fadeOut");
            popupSala.classList.add("fadeIn");
            popupSala.style.display = "flex";
            esconderFormularios();
            desativarBotoes();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            popupSala.classList.remove("fadeIn");
            popupSala.classList.add("fadeOut");
            setTimeout(function () {
                popupSala.style.display = "none";
            }, 500);
        });
    }

    if (opcaoJogarSozinho) {
        opcaoJogarSozinho.addEventListener("click", function () {
            esconderFormularios();
            formJogarSozinho.style.display = "block";
            desativarBotoes();
            opcaoJogarSozinho.classList.add("active");
        });
    }

    if (opcaoCriarSala) {
        opcaoCriarSala.addEventListener("click", function () {
            esconderFormularios();
            formCriarSala.style.display = "block";
            desativarBotoes();
            opcaoCriarSala.classList.add("active");
        });
    }

    if (opcaoEntrarSala) {
        opcaoEntrarSala.addEventListener("click", function () {
            esconderFormularios();
            formEntrarSala.style.display = "block";
            desativarBotoes();
            opcaoEntrarSala.classList.add("active");
        });
    }

    if (formJogarSozinho) {
        formJogarSozinho.addEventListener("submit", function (e) {
            e.preventDefault();

            var numPerguntas = document.getElementById("num-perguntas-sozinho").value;
            var tipoPerguntas = document.getElementById("tipo-perguntas-sozinho").value;
            var temaPerguntas = document.getElementById("tema-perguntas-sozinho").value;
            var tempoTeoricas = document.getElementById("tempo-teoricas-sozinho").value;
            var tempoPraticas = document.getElementById("tempo-praticas-sozinho").value;
            var quedaPontosPraticas = document.getElementById("queda-pontos-praticas-sozinho").value;

            var queryString = `?numPerguntas=${encodeURIComponent(numPerguntas)}&tipoPerguntas=${encodeURIComponent(tipoPerguntas)}&temaPerguntas=${encodeURIComponent(temaPerguntas)}&tempoTeoricas=${encodeURIComponent(tempoTeoricas)}&tempoPraticas=${encodeURIComponent(tempoPraticas)}&quedaPontosPraticas=${encodeURIComponent(quedaPontosPraticas)}`;

            console.log("Query string para redirecionamento (Jogar Sozinho):", queryString);

            window.location.href = "pagjogo.html" + queryString;
        });
    }

    if (formCriarSala) {
        formCriarSala.addEventListener("submit", function (e) {
            e.preventDefault();
            var nomeSala = document.getElementById("nome-sala").value;
            var publicoPrivado = document.getElementById("publico-privado").value;
            var senhaSala = document.getElementById("senha-sala").value;
            var numPerguntas = document.getElementById("num-perguntas").value;
            var numParticipantes = document.getElementById("num-participantes").value;
            var tipoPerguntas = document.getElementById("tipo-perguntas").value;
            var temaPerguntas = document.getElementById("tema-perguntas").value;
            var tempoTeoricas = document.getElementById("tempo-teoricas").value;
            var tempoPraticas = document.getElementById("tempo-praticas").value;
            var quedaPontosPraticas = document.getElementById("queda-pontos-praticas").value;
            var playerName = "Player1"; // Replace with actual player name
            var nickname = "Nickname1"; // Replace with actual nickname
            var music = "Music1"; // Replace with actual music choice

            socket.emit('createRoom', {
                room: nomeSala,
                creator: playerName,
                maxPlayers: numParticipantes,
                isPublic: publicoPrivado === 'publica'
            });

            socket.on('roomCreated', function (room) {
                var queryString = `?nomeSala=${encodeURIComponent(nomeSala)}&publicoPrivado=${encodeURIComponent(publicoPrivado)}&numPerguntas=${encodeURIComponent(numPerguntas)}&numParticipantes=${encodeURIComponent(numParticipantes)}&tipoPerguntas=${encodeURIComponent(tipoPerguntas)}&tema=${encodeURIComponent(temaPerguntas)}&tempoTeoricas=${encodeURIComponent(tempoTeoricas)}&tempoPraticas=${encodeURIComponent(tempoPraticas)}&quedaPontosPraticas=${encodeURIComponent(quedaPontosPraticas)}&playerName=${encodeURIComponent(playerName)}`;
                if (publicoPrivado === "privada" && senhaSala) {
                    queryString += `&senhaSala=${encodeURIComponent(senhaSala)}`;
                }
                window.location.href = "espera.html" + queryString;
            });

            socket.on('roomCreationError', function (error) {
                console.error("Erro ao criar sala:", error);
                alert("Erro ao criar sala.");
            });
        });
    }

    if (publicoPrivadoSelect) {
        publicoPrivadoSelect.addEventListener("change", function () {
            if (publicoPrivadoSelect.value === "privada") {
                senhaContainer.style.display = "block";
            } else {
                senhaContainer.style.display = "none";
            }
        });
    }

    function ajustarCamposPerguntas(tipo, teoricasElements, praticasElements) {
        if (tipo === "") {
            teoricasElements.forEach(function (element) {
                element.style.display = "block";
                element.querySelector('input').required = true;
            });
            praticasElements.forEach(function (element) {
                element.style.display = "block";
                element.querySelectorAll('input').forEach(input => input.required = true);
            });
        } else if (tipo === "teoricas") {
            teoricasElements.forEach(function (element) {
                element.style.display = "block";
                element.querySelector('input').required = true;
            });
            praticasElements.forEach(function (element) {
                element.style.display = "none";
                element.querySelectorAll('input').forEach(input => input.required = false);
            });
        } else if (tipo === "praticas") {
            teoricasElements.forEach(function (element) {
                element.style.display = "none";
                element.querySelector('input').required = false;
            });
            praticasElements.forEach(function (element) {
                element.style.display = "block";
                element.querySelectorAll('input').forEach(input => input.required = true);
            });
        } else if (tipo === "mistas") {
            teoricasElements.forEach(function (element) {
                element.style.display = "block";
                element.querySelector('input').required = true;
            });
            praticasElements.forEach(function (element) {
                element.style.display = "block";
                element.querySelectorAll('input').forEach(input => input.required = true);
            });
        }
    }

    if (tipoPerguntasSelect) {
        tipoPerguntasSelect.addEventListener("change", function () {
            ajustarCamposPerguntas(tipoPerguntasSelect.value, perguntasTeoricasElements, perguntasPraticasElements);
        });
    }

    if (tipoPerguntasSozinhoSelect) {
        tipoPerguntasSozinhoSelect.addEventListener("change", function () {
            ajustarCamposPerguntas(tipoPerguntasSozinhoSelect.value, perguntasTeoricasSozinhoElements, perguntasPraticasSozinhoElements);
        });
    }

    window.addEventListener("click", function (e) {
        if (e.target == popupSala) {
            popupSala.classList.remove("fadeIn");
            popupSala.classList.add("fadeOut");
            setTimeout(function () {
                popupSala.style.display = "none";
            }, 500);
        }
    });

    if (formEntrarSalaPrivada) {
        formEntrarSalaPrivada.addEventListener("submit", function (e) {
            e.preventDefault();
            var nomeSalaPrivada = document.getElementById("nome-sala-privada").value;
            var senhaSalaPrivada = document.getElementById("senha-sala-privada").value;
            alert(`Tentando entrar na sala privada: ${nomeSalaPrivada} com senha ${senhaSalaPrivada}`);
        });
    }
});
