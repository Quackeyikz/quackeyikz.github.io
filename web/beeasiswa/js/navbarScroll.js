function toggleScrollClass() {
    var navBar = document.getElementById('nav');
    window.pageYOffset > 0 ? navBar.classList.add('scrolled') : navBar.classList.remove('scrolled');
}

window.addEventListener('scroll', function () { toggleScrollClass() });
toggleScrollClass();

$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.nav-container').css('background-color', 'white');
    });
});