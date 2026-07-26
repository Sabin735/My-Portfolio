let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide every slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Show only the selected slide
    slides[slideIndex - 1].style.display = "block";

    // Highlight selected dot
    dots[slideIndex - 1].classList.add("active");
}
