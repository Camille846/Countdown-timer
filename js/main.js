const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const newYearDate = new Date('1 jan 2022 00:00:00').getTime()

const countdown = setInterval(() => {
    const currentDate = new Date
    const difference = newYearDate - currentDate
    
    const days = Math.floor(difference / (24 * 60 * 60 * 1000))
    const hours = Math.floor((difference / (3600 * 1000)) % 24)
    const minutes = Math.floor((difference / (60 * 1000)) % 60)
    const seconds = Math.floor((difference % (1000*60) / 1000))
    
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}, 1000);

