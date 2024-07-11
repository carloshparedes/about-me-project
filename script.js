document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    });
});