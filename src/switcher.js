const timerShow = document.getElementById("timerCheckContainer");
const calckShow = document.getElementById("dateCheckContainer");

    export const timeswitcher = (event) => {
        event.preventDefault();
        calckShow.innerHTML = "";
        timerShow.innerHTML = "";
         
    timerShow.insertAdjacentHTML('beforeend', 
    `<form id="timer">
       <h3>Таймер</h3>
       <div id="liveTimer"></div>
       <label>
           <input type="text" id ="setTime">
        </label>
           <button type = "submit" id = "startButton">Старт!</button>
           <button type = "submit" id = "stopButton">Стоп!</button>
    
   </form>`);
    };   

    export const dateswitcher = () => {
        calckShow.innerHTML = "";
        timerShow.innerHTML = "";
    calckShow.insertAdjacentHTML('beforeend', 
    
    `<form id="datecalc">
    <h3>Калькулятор дат</h3>
    <label>
        <strong>Первая дата:</strong>
        <input type="date" name="firstDate" />
    </label>
    <label>
        <strong>Вторая дата:</strong>
        <input type="date" name="secondDate" />
    </label>
    <button type="submit" id = "datecalcbtn">Расчитать промежуток</button>
    <p id="datecalc__result"></p>
    </form>`
    );
    };   