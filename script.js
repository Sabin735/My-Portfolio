// Initialize slider when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  showSlides(slideIndex);
});

function plusSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let currentSlideIndex = 1; // Default to 1 if no slide is active
  
  // Find current slide index by checking which one is displayed
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === "block") {
      currentSlideIndex = i + 1;
      break;
    }
  }
  
  showSlides(currentSlideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Handle boundary wrapping
  if (n > slides.length) { n = 1; }
  if (n < 1) { n = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  // Show current slide and highlight corresponding dot
  if (slides.length > 0 && n > 0 && n <= slides.length) {
    slides[n - 1].style.display = "block";
    if (dots.length > 0) {
      dots[n - 1].classList.add("active");
    }
  }
}
