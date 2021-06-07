import { diffDates, diffToHtml } from "./datecalc.js"; 
import { formatError } from "./utils.js"; 
import {  timeswitcher, dateswitcher } from "./switcher.js"; //импорт отрисовки

const Timer = document.getElementById("timerCheck");
Timer.addEventListener("click", timeswitcher);
const calck = document.getElementById("dateCheck");
calck.addEventListener("click", dateswitcher);



const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); 
}




const dateTimerStart = document.getElementById("startButton");
const dateTimerStop = document.getElementById("stopButton");
const timerBody = document.getElementById("liveTimer");

dateTimerStart.addEventListener("click", startTimer);
dateTimerStop.addEventListener("click", stopTimer);

function stopTimer(event) {
    event.preventDefault();
    clearTimeout(timer);
    timerBody.insertAdjacentHTML('afterbegin', "Таймер остановлен: ");
        
};

function startTimer(event) {
    event.preventDefault();
    let timeStart = document.getElementById("setTime").value;
    countdown();
    function countdown(){
        timerBody.innerHTML = timeStart;
        timeStart--; 
        if (timeStart < 0){
          clearTimeout(timer);         }
        else {
          timer = setTimeout(countdown, 1000);
        }
    }

}




