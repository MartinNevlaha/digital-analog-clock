class Time {

    actualTime() {
        const time = new Date;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let currentTime = [hours, minutes, seconds]
        console.log(currentTime)
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
        console.log(timeToDeg);
        return timeToDeg;
    }
}
class UpdateDisplay {
    constructor(degrees) {
        this.degrees = degrees;
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

class App {
    static init() {
        setInterval(()=>{
            const time = new Time();
            this.curTime = time.actualTime();
            const timeToDeg = new CalculateRotation(this.curTime);
            this.degrees = timeToDeg.calculate();
            const updateDisp = new UpdateDisplay(this.degrees);
            updateDisp.renderDisplay();
        },1000);
    }
}
App.init();