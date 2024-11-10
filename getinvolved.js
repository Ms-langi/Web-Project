// Select all images inside the slideshow container
const slides = document.querySelectorAll('.slideshow .slide');
let currentIndex = 0;

function showNextSlide() {
    // Hide the current slide by removing the 'active' class
    slides[currentIndex].classList.remove('active');
    
    // Move to the next slide in the array
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Show the new slide by adding the 'active' class
    slides[currentIndex].classList.add('active');
}

// Set an interval to cycle slides every 5 seconds
setInterval(showNextSlide, 5000);

// Show the first slide initially
slides[currentIndex].classList.add('active');
