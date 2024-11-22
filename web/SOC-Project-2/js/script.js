let YPosReset = 0;
let nav = document.getElementById("navbar-container");
let navbarToggler = document.querySelector(".navbar-toggler");

let homeNavLink = document.getElementById("nav-link-1");

window.addEventListener('scroll', () => {
    const navbarOpened = navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true';

    if (navbarOpened)
        return;

    let YPosNow = window.scrollY;

    if (YPosNow > YPosReset)
        nav.style.transform = 'translateY(-100%)';
    else
        nav.style.transform = 'translateY(0)';

    YPosReset = YPosNow;

    if (window.scrollY === 0)
        homeNavLink.classList.add("active");
});