let homeNavLink = document.getElementById("nav-link-1");
let layanan = document.getElementById("nav-link-3").classList.contains("active");
let faq = document.getElementById("nav-link-4").classList.contains("active");
let kontak = document.getElementById("nav-link-5").classList.contains("active");

window.addEventListener('scroll', () => {
    if (window.scrollY === 0)
        homeNavLink.classList.add("active");

    if (layanan || faq || kontak)
        artikelNavLink.classList.remove("active");
    else if (!layanan || !faq || !kontak)
        artikelNavLink.classList.add("active");
});
