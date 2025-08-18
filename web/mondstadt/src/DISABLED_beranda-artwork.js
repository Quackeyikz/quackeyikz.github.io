let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let img4 = document.getElementById("img-4");
let img5 = document.getElementById("img-5");
let img6 = document.getElementById("img-6");
let img7 = document.getElementById("img-7");
let img8 = document.getElementById("img-8");
let img9 = document.getElementById("img-9");
let img10 = document.getElementById("img-10");
let img11 = document.getElementById("img-11");

window.addEventListener("scroll", function() {
    let scrollValue = window.scrollY;

    img1.style.transform = 'translateY(' + (scrollValue * 0.0) + 'px)';
    img2.style.transform = 'translateY(' + (scrollValue * 0.1) + 'px)';
    img3.style.transform = 'translateY(' + (scrollValue * 0.2) + 'px)';
    img4.style.transform = 'translateY(' + (scrollValue * 0.3) + 'px)';
    img5.style.transform = 'translateY(' + (scrollValue * 0.4) + 'px)';
    img6.style.transform = 'translateY(' + (scrollValue * 0.5) + 'px)';
    img7.style.transform = 'translateY(' + (scrollValue * 0.6) + 'px)';
    img8.style.transform = 'translateY(' + (scrollValue * 0.5) + 'px)';
    img9.style.transform = 'translateY(' + (scrollValue * 0.7) + 'px)';
    img10.style.transform = 'translateY(' + (scrollValue * 1) + 'px)';
    img11.style.transform = 'translateY(' + (scrollValue * 0.5) + 'px)';
});