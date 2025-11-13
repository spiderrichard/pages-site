// Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.menu-wrapper');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
        console.log(mobileMenu.classList);
        console.log('contains open');
    } else {
        console.log(mobileMenu.classList);
        console.log('missing open');
    }
});