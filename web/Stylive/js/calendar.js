const currentDate = document.querySelector(".current-date"),
dayContainer = document.getElementById("calendar-day");


let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const monthsList = ["January", "February", "March", "April",
                     "May", "June", "July", "August", 
                     "September", "October", "November", "December"];

const renderCalendar = () => {
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let dayCell = "";

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "cell-active" : "";
        dayCell += `<div class="day-cell ${isToday}"><span>${i}</span><img src="" alt=""></div>`
    }

    currentDate.innerText = `${monthsList[currentMonth]} ${currentYear}`;
    dayContainer.innerHTML = dayCell;
}

renderCalendar();