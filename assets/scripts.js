// Elements

//nav
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.menu-wrapper');
const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const closeIcon = document.querySelector('.x-close-mark-icon');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
        hamburgerMenuIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
    } else {
        hamburgerMenuIcon.classList.remove('hide');
        closeIcon.classList.add('hide');
    }
});