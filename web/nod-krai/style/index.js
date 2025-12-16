/* ===============================
   SIMPLE ASSET LOADER
================================ */

function createLoader(total) {
  let completed = 0;
  const callbacks = [];

  return {
    step() {
      completed++;
      const progress = completed / total;
      callbacks.forEach((cb) => cb(progress));
    },
    onProgress(cb) {
      callbacks.push(cb);
    },
  };
}

/* ===============================
   MAIN
================================ */

document.addEventListener("DOMContentLoaded", async () => {
  const overlay = document.getElementById("loading-overlay");
  const header = document.getElementById("art");
  const progressBar = document.querySelector(".progress-bar");

  /* ---- ASSETS TO TRACK ---- */
  const assets = [
    "img/11_Roof Foreground - Nod-Krai.webp", // img-0
    "img/10_Kuuvahki Front - Nod-Krai.webp", // img-1
    "img/9_Front Building - Nod-Krai.webp", // img-2
    "img/8_Moon Rings - Nod-Krai.webp", // img-3
    "img/7_Dashed Rings - Nod-Krai.webp", // img-4
    "img/6_Hero Layer Divider - Landing Page - Nod-Krai.webp", // img-5
    "img/5_Nasha Town Silouhette - Nod-Krai.webp", // img-6
    "img/4_Kuuvahki Back - Nod-Krai.webp", // img-7
    "img/3_Hiisi Terrain - Nod-Krai.webp", // img-8
    "img/2_Hiisi Island - Nod-Krai.webp", // img-9
    "img/1_The Moon - Nod-Krai.webp", // img-10
    "img/0_Sky Lines - Nod-Krai.webp", // img-11
    "img/Backdrop - Nod-Krai.webp", // img-12
  ];

  const loader = createLoader(assets.length);

  loader.onProgress((progress) => {
    progressBar.style.transform = `scaleX(${progress})`;
  });

  /* ---- LOAD ASSETS WHILE OVERLAY IS VISIBLE ---- */
  await Promise.all(
    assets.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;

        img.onload = async () => {
          try {
            await img.decode();
          } catch {}
          loader.step();
          resolve();
        };

        img.onerror = () => {
          loader.step();
          resolve();
        };
      });
    })
  );

  /* ---- REVEAL PAGE ---- */
  header.style.visibility = "visible";
  overlay.classList.add("fade-out");

  overlay.addEventListener("transitionend", () => {
    overlay.remove();
  });

  /* ===============================
     IMAGE REFERENCES
  ================================ */

  const images = Array.from({ length: 13 }, (_, i) =>
    document.getElementById(`img-${i}`)
  );

  const movementSpeeds = [
    { speed: 0.0 },
    { speed: 0.2 },
    { speed: 0.4 },
    { speed: 0.0 },
    { speed: 0.0 },
    { speed: 0.0 },
    { speed: 0.6 },
    { speed: 0.7 },
    { speed: 0.5 },
    { speed: 0.7 },
    { speed: 0.5 }, // Moon
    { speed: 0.9 },
    { speed: 0.9 },
  ];

  /* ---- STAGGER IN ---- */
  images.forEach((img, i) => {
    if (!img) return;
    setTimeout(() => {
      img.classList.add("loaded");
    }, i * 120);
  });

  /* ---- PARALLAX SCROLL ---- */
  window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;

    images.forEach((img, idx) => {
      if (!img) return;

      const parallaxY = scrollValue * movementSpeeds[idx].speed;

      if (idx === 3)
        img.style.transform = `scale(0.96) translateY(${parallaxY}px)`;
      else if (idx === 4)
        img.style.transform = `scale(0.93) translateY(${parallaxY}px)`;
      else img.style.transform = `translateY(${parallaxY}px)`;

      // img.style.setProperty("--scroll-y", `${parallaxY}px`);
    });
  });
});
