let whiteGradient = document.getElementById('white-gradient');
let clouds = document.getElementById('clouds');
let distantMountain = document.getElementById('distant-mountain');
let city = document.getElementById('city');
let closeMountain = document.getElementById('close-mountain');
let forest = document.getElementById('forest');
let grassLight = document.getElementById('grass-light');
let titleLogoContainer = document.getElementById('title-logo-container');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    whiteGradient.style.top = value * 0.6 + 'px';
    clouds.style.marginTop = value * 0.7 + 'px';
    distantMountain.style.marginTop = value * 0.6 + 'px';
    city.style.marginTop = value * 0.5 + 'px';
    closeMountain.style.marginTop = value * 0.4 + 'px';
    forest.style.marginTop = value * 0.3 + 'px';
    grassLight.style.bottom = value * (-0.2) + 'px';
    titleLogoContainer.style.marginTop = value * 0.4 + 'px';
});