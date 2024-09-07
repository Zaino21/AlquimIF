document.addEventListener('DOMContentLoaded', function() {
    const openMenuButton = document.querySelector('.open-menu');
    const closeMenuButton = document.querySelector('.close-menu');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    // Abrir o menu lateral
    openMenuButton.addEventListener('click', function() {
        sideMenu.classList.add('open');
        overlay.classList.add('show');
        closeMenuButton.style.display = 'block'; // Mostrar botão de fechar
    });

    // Fechar o menu lateral
    function closeMenu() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
        openMenuButton.style.display = 'block'; // Mostrar botão de abrir quando o menu está fechado
        closeMenuButton.style.display = 'none'; // Ocultar botão de fechar
    }

    closeMenuButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Manipular a visibilidade dos botões em diferentes tamanhos de tela
    function updateMenuButtonVisibility() {
        if (window.innerWidth >= 769) {
            openMenuButton.style.display = 'none'; // Ocultar botão de abrir em telas maiores
            closeMenuButton.style.display = 'none'; // Ocultar botão de fechar em telas maiores
            sideMenu.classList.remove('open'); // Garantir que o menu não esteja aberto
            overlay.classList.remove('show'); // Garantir que o overlay esteja oculto
        } else if (sideMenu.classList.contains('open')) {
            openMenuButton.style.display = 'none';
            closeMenuButton.style.display = 'block';
        } else {
            openMenuButton.style.display = 'block';
            closeMenuButton.style.display = 'none';
        }
    }

    // Atualizar visibilidade dos botões ao redimensionar a janela
    window.addEventListener('resize', updateMenuButtonVisibility);

    // Atualizar visibilidade dos botões na carga inicial
    updateMenuButtonVisibility();
});
