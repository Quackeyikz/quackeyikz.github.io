let artikelNavLink = document.getElementById("nav-link-2");
let kontakNavLink = document.getElementById("nav-link-5");

window.addEventListener('scroll', () => {
    if (!kontakNavLink.classList.contains("active"))
        artikelNavLink.classList.add("active");
    else if (kontakNavLink.classList.contains("active"))
        artikelNavLink.classList.remove("active");
});
