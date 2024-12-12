// Select the navbar
const navbar = document.getElementById('navbar');

// Throttle scroll events for performance
let lastScrollY = 0;
const throttleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = currentScroll;
};

// Add scroll event listener
window.addEventListener('scroll', throttleScroll);
