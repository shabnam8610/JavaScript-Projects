// Open the lightbox modal.
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the lightbox modal.
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Start the lightbox on the first slide.
let slideIndex = 1;

// Move forward or backward through the images.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Display the image selected from the thumbnail gallery.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the correct slide and hide the others.
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    // If the user moves past the last slide, return to the first slide.
    if (n > slides.length) {
        slideIndex = 1;
    }

    // If the user moves backward from the first slide, go to the last slide.
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide every slide before showing the selected one.
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the selected large image.
    slides[slideIndex - 1].style.display = "block";
}

// Close the modal when the user clicks outside the image area.
window.addEventListener("click", function(event) {
    const modal = document.getElementById("myModal");

    if (event.target === modal) {
        closeModal();
    }
});

// Allow the Escape key to close the lightbox.
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
