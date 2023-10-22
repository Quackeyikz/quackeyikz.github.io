// Get all navigation buttons
const navButtons = document.querySelectorAll('.tablink');

// Add a click event listener to each button
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});

function openThought(thoughtName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(thoughtName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

document.getElementById('defaultOpen').click();
