const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', !expanded);
});

// Close menu when a nav link is clicked (on mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
        }
    });
});
// about us



const images = document.querySelectorAll('.profile-img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const currentBox = image.closest('.boxes');
        const currentDesc = currentBox.querySelector('.description');
        const isAlreadyVisible = currentDesc.classList.contains('show');

        // Hide all descriptions
        document.querySelectorAll('.description').forEach(desc => {
            desc.classList.remove('show');
        });

        // Show the clicked one only if it wasn't already visible
        if (!isAlreadyVisible) {
            currentDesc.classList.add('show');
        }
    });
});

/* THank you for buying */

// Select all buy buttons
const buyButtons = document.querySelectorAll('.buy-btn');

// Loop through each button and attach a click event
buyButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents page from reloading
        alert("✅ Thank you for buying!");
    });
});

