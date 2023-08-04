$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('shine-shadow');
        $(this).toggleClass('animation-hover');
        $(this).toggleClass('animation-scale');
    });
});

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