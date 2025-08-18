// Venti's Wind Magic - Enhanced Parallax System
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

// Wind patterns - clean parallax speeds without sway
const windPatterns = [
    { speed: 0.0 },      // Ground (img1)
    { speed: 0.2 },      // Near ground (img2)
    { speed: 0.4 },      // Low wind (img3)
    { speed: 0.5 },      // Medium wind (img4)
    { speed: 0.6 },      // Higher wind (img5)
    { speed: 0.6 },      // Strong wind (img6)
    { speed: 0.68 },      // Very strong wind (img7)
    { speed: 0.6 },      // Statue layer (img8)
    { speed: 0.8 },      // High altitude (img9)
    { speed: 0.7 },      // Sky layer (img10)
    { speed: 0.5 }       // Mid layer (img11)
];

let time = 0;

window.addEventListener("scroll", function() {
    let scrollValue = window.scrollY;
    time += 0.01; // Time for other effects
    
    // Apply clean parallax movement to each layer
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
    
    images.forEach((img, index) => {
        if (img) {
            const pattern = windPatterns[index];
            const parallaxY = scrollValue * pattern.speed;
            
            img.style.transform = `translateY(${parallaxY}px)`;
        }
    });
});

// Gentle wind sound effect simulation (visual feedback)
function createWindEffect() {
    const body = document.body;
    const windStrength = Math.abs(Math.sin(time * 0.5)) * 0.02 + 0.98;
    body.style.filter = `brightness(${windStrength})`;
}

// Run wind effects
setInterval(() => {
    time += 0.02;
    createWindEffect();
}, 50);