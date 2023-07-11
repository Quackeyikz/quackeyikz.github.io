function toggleScrollClass() {
    var nav = document.getElementById('nav');
    window.pageYOffset > 0 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled')
}
window.addEventListener('scroll', function () { toggleScrollClass() });
toggleScrollClass();