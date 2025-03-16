const currentDate = document.querySelector(".current-date"),
dayContainer = document.getElementById("calendar-day"),
prevNextMonthIcon = document.querySelectorAll(".chev");

let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const monthsList = ["January", "February", "March", "April",
                     "May", "June", "July", "August", 
                     "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDateofMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    let dayCell = "";

    for (let i = firstDateofMonth; i > 0; i--) {
        dayCell += `<div class="day-cell cell-inactive"><span>${lastDateofLastMonth - i + 1}</span><img src=""></div>`
    }
    
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "cell-active" : "";
        let imgSrc = "";
    
        if (i === 16 && currentMonth === 3 - 1) {
            imgSrc = "./image/icons/tshirt_yellow_and_pants.png";
        } else if (i === 17 && currentMonth === 3 - 1) {
            imgSrc = "./image/icons/suit_blue_red_tie.png";
        } else if (i === 27 && currentMonth === 3 - 1) {
            imgSrc = "./image/icons/jacket_purple_yellow.png";
        }
    
        dayCell += `<div class="day-cell ${isToday}"><span>${i}</span><img src="${imgSrc}" onerror="this.onerror=null"></div>`
    }
    
    for (let i = lastDayofMonth; i < 6; i++) {
        dayCell += `<div class="day-cell cell-inactive"><span>${i - lastDayofMonth + 1}</span><img src=""></div>`
    }

    currentDate.innerText = `${monthsList[currentMonth]} ${currentYear}`;
    dayContainer.innerHTML = dayCell;
}

renderCalendar();

prevNextMonthIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

const outfitFormButton = document.querySelector(".add-outfit-button");
const formOverlay = document.querySelector(".form-overlay");

outfitFormButton.addEventListener("click", () => formOverlay.style.display = "block");

window.addEventListener("click", e => {
    e.target === formOverlay ? formOverlay.style.display = "none" : false;
});