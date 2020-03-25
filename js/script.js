class Time {
    actualTime() {
        const time = new Date;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let currentTime = [hours, minutes, seconds]
        return currentTime;
    }
}
class CalculateRotation {
    constructor(timeArray) {
        this.currentTime = timeArray
    }
    calculate() {
        const [hours, minutes, seconds] = this.currentTime;
        let hoursToDeg = hours * (360 / 12);
        let minutesToDeg = minutes * (360 / 60);
        let secondsToDeg = seconds * (360 / 60);
        let timeToDeg = [hoursToDeg, minutesToDeg, secondsToDeg];
        return timeToDeg;
    }
}
class UpdateDisplay {
    constructor(degrees, currentTime) {
        this.degrees = degrees;
        this.currentTime = currentTime;
    }
    formatTime(timeParam) {
        timeParam < 10 ? timeParam = '0' + timeParam : timeParam;
        return timeParam;
    }
    renderDisplayDigital () {
        const [hours, minutes, seconds] = this.currentTime;
        const display = document.getElementById('time');
        display.textContent = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
    }
    renderDisplay() {
        const [degHours, degMinutes, degSeconds] = this.degrees;
        const handHour = document.querySelector('.hours');
        const handMinute = document.querySelector('.minutes');
        const handSecond = document.querySelector('.seconds');
        handHour.style.setProperty('--rotation', degHours);
        handMinute.style.setProperty('--rotation', degMinutes);
        handSecond.style.setProperty('--rotation', degSeconds);
    }
}
class Desision {

    showAnalog() {
        const analog = document.querySelector('.analogClock');
        const digital = document.querySelector('.clock');
        digital.classList.remove('unvisible');
        analog.classList.add('unvisible');
    }
    showDigital() {
        const analog = document.querySelector('.analogClock');
        const digital = document.querySelector('.clock');
        analog.classList.remove('unvisible');
        digital.classList.add('unvisible');
    }
    listener() {
        const btnAnalog = document.querySelector('.analog');
        const btnDigital = document.querySelector('.digital');
        btnAnalog.addEventListener('click', this.showAnalog);
        btnDigital.addEventListener('click', this.showDigital);
    }
}
class App {
    static init() {
        const desision = new Desision();
        desision.listener();
        setInterval(()=>{
            const time = new Time();
            this.curTime = time.actualTime();
            const timeToDeg = new CalculateRotation(this.curTime);
            this.degrees = timeToDeg.calculate();
            const updateDisp = new UpdateDisplay(this.degrees, this.curTime);
            updateDisp.renderDisplay();
            updateDisp.renderDisplayDigital();
        },1000);
    }
}
App.init();