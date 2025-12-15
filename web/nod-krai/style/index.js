document.addEventListener('DOMContentLoaded', () => {
    let img0 = document.getElementById("img-0");
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
    let img12 = document.getElementById("img-12");

    let movementSpeeds = [
        { speed: 0.0 },
        { speed: 0.2 },
        { speed: 0.4 },
        { speed: 0.6 },
        { speed: 0.7 },
        { speed: 0.5 },
        { speed: 0.7 },
        { speed: 0.5 },     // Moon
        { speed: 0.9 },
        { speed: 0.9 }
    ];

    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;
        const images = [ img0, img1, img2, img6, img7, img8, img9, img10, img11, img12 ];

        images.forEach((img, idx) => {
            if (img){
                const speeds = movementSpeeds[idx];
                const parallaxY = scrollValue * speeds.speed;

                img.style.transform = `translateY(${parallaxY}px)`;
            }
        })
    })
});