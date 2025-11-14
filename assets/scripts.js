// Elements

//nav
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.menu-wrapper');
const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const closeIcon = document.querySelector('.x-close-mark-icon');
const navBar = document.querySelector('.navigation-bar');
const navBarBtns = document.querySelectorAll('.navigation-bar[button]');

console.log(navBarBtns);

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

function getScrollTop() {
    if (typeof window.scrollY === 'number') {
        return window.scrollY;
    }

    if (document.documentElement && document.documentElement.scrollTop) {
        return document.documentElement.scrollTop;
    }

    return document.body ? document.body.scrollTop : 0;
}

window.addEventListener('scroll', () => {
    if (getScrollTop() > 1) {
        navBar.classList.add('scrolled');
        navBarBtns.forEach(btn => {btn.classList.add('scrolled')});
    } else {
        navBar.classList.remove('scrolled');
        navBarBtns.forEach(btn => {btn.classList.remove('scrolled')});
    }
});