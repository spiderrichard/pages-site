console.log('Script Loaded 01');

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.menu-wrapper');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});