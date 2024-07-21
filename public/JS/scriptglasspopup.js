// scriptglasspopup.js

document.addEventListener('DOMContentLoaded', () => {
    const chooseGlassBtn = document.getElementById('chooseGlassBtn');
    const glassPopup = document.getElementById('glass-popup');
    const closeGlassBtn = document.querySelector('.close-glass-btn');
    const glassOptions = document.querySelectorAll('.glass-option');
    const previewProfilePic = document.getElementById('previewProfilePic');
    const profilePicCard = document.getElementById('profilePicCard');

    chooseGlassBtn.addEventListener('click', () => {
        glassPopup.style.display = 'block';
    });

    closeGlassBtn.addEventListener('click', () => {
        glassPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == glassPopup) {
            glassPopup.style.display = 'none';
        }
    });

    glassOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const selectedGlass = event.target.src;
            previewProfilePic.src = selectedGlass;
            profilePicCard.src = selectedGlass;
            glassPopup.style.display = 'none';
        });
    });
});
