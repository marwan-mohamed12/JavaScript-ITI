const clockHours = document.querySelector("span.hours"),
    clockMinutes = document.querySelector("span.minutes"),
    clockSeconds = document.querySelector("span.seconds"),
    clockampm = document.querySelector("span.am-pm");

let alarmHours = 0,
    alarmMinutes = 0,
    alarmSeconds = 0;

const checkAlarm = (hoursA, minutesA, secondsA) => {
    console.log("from check Alarm");
    console.log(alarmHours, alarmMinutes, alarmSeconds);
    console.log(hoursA, minutesA, secondsA);
    if (alarmHours === hoursA && 
        alarmMinutes === minutesA && 
        alarmSeconds === secondsA) {
            alert(`The time now is ${hoursA}:${minutesA}:${secondsA}`);
    }
}

const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDay();

    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    document.querySelectorAll(".clock ul li").forEach(ele => {
        ele.classList.remove("active");
        if (+ele.attributes.data.value === day) {
            ele.classList.add("active");
        }
    })

    clockHours.innerText = hours.toString().padStart(2, '0');
    clockMinutes.innerText = minutes.toString().padStart(2, '0');
    clockSeconds.innerText = seconds.toString().padStart(2, '0');
    clockampm.innerText = ampm;

    checkAlarm(hours, minutes, seconds);

}

updateTime();
setInterval(updateTime, 1000);

const setBtn = document.querySelector(".set");

setBtn.addEventListener('click', () => {
    const hoursInput = document.querySelector(".hours input"),
        minutesInput = document.querySelector(".minutes input"),
        secondsInput = document.querySelector(".seconds input");


    alarmHours = +document.querySelector(".hours input").value;
    alarmMinutes = +document.querySelector(".minutes input").value;
    alarmSeconds = +document.querySelector(".seconds input").value;

    console.log(alarmHours, alarmMinutes, alarmSeconds);

    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';

});

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener('click', () => {
    alarmHours = 0;
    alarmMinutes = 0;
    alarmSeconds = 0;
})