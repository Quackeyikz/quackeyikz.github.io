$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('shine-shadow');
        $(this).toggleClass('animation-hover');
        $(this).toggleClass('animation-scale');
    });

    $('.hide-hud').click(function () {
        $('.landing-item-hide').toggleClass('v-hide');
    });
});





// Wrap the JavaScript code in a function
function init() {
    // Function to change the background image and apply fade animation
    function changeBackground() {
        const images = [
            'img/skyimg/2.jpg',
            'img/skyimg/3.jpg',
            'img/skyimg/4.jpg',
            'img/skyimg/5.jpg',
            'img/skyimg/6.jpg',
            'img/skyimg/7.jpg',
            'img/skyimg/8.jpg',
            'img/skyimg/9.jpg',
            'img/skyimg/10.jpg',
            'img/skyimg/11.jpg',
            'img/skyimg/12.jpg',
            'img/skyimg/13.jpg',
            'img/skyimg/14.jpg',
            'img/skyimg/15.jpg',
            'img/skyimg/16.jpg',
            'img/skyimg/17.jpg',
            'img/skyimg/18.jpg',
            'img/skyimg/19.jpg',
            'img/skyimg/20.jpg',
            'img/skyimg/21.jpg',
            'img/skyimg/22.jpg',
            'img/skyimg/23.jpg'
            // Add more image URLs here
        ];

      const landingContainer = document.querySelector('.landing-container');
      let currentIndex = 0;

      // Get the current background image URL
      const currentBackground = landingContainer.style.backgroundImage.replace(/^url\(['"](.+)['"]\)/, '$1');
      // Find the index of the current background image in the images array
      const index = images.indexOf(currentBackground);
      // If the current background image is found in the images array, update the currentIndex
      if (index !== -1) {
        currentIndex = index;
      }

      // Calculate the index of the next background image
      const nextIndex = (currentIndex + 1) % images.length;
      const nextImage = `url('${images[nextIndex]}')`;

      // Apply fade-out animation
      landingContainer.classList.add('fade-out');
      landingContainer.classList.remove('fade-in');

      setTimeout(function () {
        // Set the new background image after fade-out completes
        landingContainer.style.backgroundImage = nextImage;
        // Apply fade-in animation
        landingContainer.classList.add('fade-in');
        landingContainer.classList.remove('fade-out');
      }, 500); // 500 milliseconds (0.5 seconds) for fade-out and fade-in
    }

    // Call the changeBackground function every 10 seconds
    setInterval(changeBackground, 10000); // 10,000 milliseconds (10 seconds)
  }

  // Attach the init function to the DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', init);





let on_off = document.querySelector('.audioToggler');
let audio = document.querySelector('audio');

on_off.onclick = function () {
    if (audio.paused) {
        audio.play();
        document.getElementById('audioToggler').src = 'img/musicOn.png';
    } else {
        audio.pause();
        document.getElementById('audioToggler').src = 'img/musicOff.png';
    }
}
audio.volume = 0.1;




function openContent(contentName, elmnt) {
    // Menyembunyikan semua "tabcontent"
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // menghapus semua background tombol
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundImage = "none";
    }

    // Menampilkan "tabcontent" spesifik
    document.getElementById(contentName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.068), rgba(255, 255, 255, 0.13))";
}
// Default Open berkerja
document.getElementById("defaultOpen").click();