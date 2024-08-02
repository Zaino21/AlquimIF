document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    let currentIndex = 0;

    function showSlide(index) {
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    setInterval(nextSlide, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const openMenuButton = document.querySelector('.open-menu');
    const closeMenuButton = document.querySelector('.close-menu');
    const nav = document.querySelector('.barranav');

    openMenuButton.addEventListener('click', function() {
        nav.classList.add('open');
    });

    closeMenuButton.addEventListener('click', function() {
        nav.classList.remove('open');
    });
});
