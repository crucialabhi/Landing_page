// JavaScript for Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});

// JavaScript for Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
    if (index === slideIndex) {
      slide.style.display = 'block';
    }
  });
}

// Automatically show the first slide
showSlide(currentSlide);

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);

// JavaScript for Scroll Animation (optional)
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
