//On Load
document.addEventListener('DOMContentLoaded', () => {
    const spinnerContainer = document.querySelector('.spinner-container');
    spinnerContainer.classList.remove('active');
    setTimeout(() => {
        spinnerContainer.style.display = 'none';
    }, 300);
});

//Lazy Loading
const sections = document.querySelectorAll('.lazy-load');

const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('loaded');
    obs.unobserve(entry.target);
  });
}, {
  rootMargin: '0px'
});

sections.forEach(section => io.observe(section));

//nav
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.menu-wrapper');
const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const closeIcon = document.querySelector('.x-close-mark-icon');
const navBar = document.querySelector('.navigation-bar');
const navBarBtns = document.querySelectorAll('.navigation-bar button');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('fixed');
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