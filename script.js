const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const slides = carouselInner.querySelectorAll('img');
const navButtons = document.querySelectorAll('.carousel-nav button');

let currentSlide = 0;

navButtons[0].addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    translateSlides();
});

navButtons[1].addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    translateSlides();
});

function translateSlides() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Set slide transition duration to 3 seconds (adjust as needed)
carouselInner.style.transitionDuration = '3s';
