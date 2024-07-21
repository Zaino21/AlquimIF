// scriptprofile.js

const profileForm = document.getElementById('profileForm');
const nicknameInput = document.getElementById('nickname');
const previewProfilePic = document.getElementById('previewProfilePic');
const profilePicCard = document.getElementById('profilePicCard');
const previewNickname = document.getElementById('previewNickname');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementsByClassName('close')[0];
const musicSelect = document.getElementById('musicSelect');
const musicSlider = document.getElementById('musicSlider');
const sliderStartTime = document.getElementById('sliderStartTime');
const sliderEndTime = document.getElementById('sliderEndTime');

const loadProfileData = () => {
    const profileData = JSON.parse(sessionStorage.getItem('profileData'));
    if (profileData) {
        console.log('Loaded profile data:', profileData);
        nicknameInput.value = profileData.nickname || '';
        previewNickname.textContent = profileData.nickname || '';
        previewProfilePic.src = profileData.profilePic || 'vidraçasperfil/vidraça1.gif';
        profilePicCard.src = profileData.profilePic || 'vidraçasperfil/vidraça1.gif';
        musicSelect.value = profileData.profileMusic || '';
        musicSlider.value = profileData.profileMusicStart || 0;
        updateSliderTime(profileData.profileMusicStart || 0);
    }
};

const openModal = () => {
    profilePicCard.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = profilePicCard.src;
    });
};

const closerModal = () => {
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

const updateSliderTime = (start) => {
    sliderStartTime.textContent = formatTime(start);
    sliderEndTime.textContent = formatTime(Math.min(parseFloat(start) + 30, 180)); // Adjust the value 180 as necessary
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const saveProfile = (profileData) => {
    console.log('Saving profile data:', profileData);
    sessionStorage.setItem('profileData', JSON.stringify(profileData));
    resetProfileTimeout();
};

const resetProfileTimeout = () => {
    clearTimeout(sessionStorage.getItem('profileTimeout'));
    const timeout = setTimeout(() => {
        sessionStorage.removeItem('profileData');
        window.location.reload();
    }, 1800000); // 30 minutes
    sessionStorage.setItem('profileTimeout', timeout);
};

const sendSubmit = () => {
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const profilePic = previewProfilePic.src;
        const nickname = nicknameInput.value;
        const profileMusic = musicSelect.value;
        const profileMusicStart = musicSlider.value;
        saveProfile({ nickname, profilePic, profileMusic, profileMusicStart });
        previewNickname.textContent = nickname;
    });
};

const trackMusicChanges = () => {
    musicSelect.addEventListener('change', () => {
        const profilePic = previewProfilePic.src;
        const nickname = nicknameInput.value;
        const profileMusic = musicSelect.value;
        const profileMusicStart = musicSlider.value;
        saveProfile({ nickname, profilePic, profileMusic, profileMusicStart });
    });

    musicSlider.addEventListener('input', () => {
        updateSliderTime(musicSlider.value);
    });

    musicSlider.addEventListener('change', () => {
        const profilePic = previewProfilePic.src;
        const nickname = nicknameInput.value;
        const profileMusic = musicSelect.value;
        const profileMusicStart = musicSlider.value;
        saveProfile({ nickname, profilePic, profileMusic, profileMusicStart });
    });
};

const logicProfile = () => {
    loadProfileData();
    openModal();
    closerModal();
    sendSubmit();
    trackMusicChanges();
};

document.addEventListener('DOMContentLoaded', logicProfile);
