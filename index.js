const secondsAce = document.getElementsByClassName('seconds')[0];
const minutesAce = document.getElementsByClassName('minutes')[0];
const hoursAce = document.getElementsByClassName('hours')[0];
const clockInfos = document.getElementsByClassName('clock-infos')[0];

function setTime() {
  const actualTime = new Date;
  let seconds = actualTime.getSeconds();
  let minutes = actualTime.getMinutes();
  let hours = actualTime.getHours();

  secondsAce.style.setProperty('--seconds', `${seconds * 6}deg`);
  minutesAce.style.setProperty('--minutes', `${minutes * 6}deg`);
  hoursAce.style.setProperty('--hours', `${hours * 30}deg`);

  // Here I used type conversion because I no longer want to declare other string variables
  if(seconds < 10)  
    seconds = '0' + seconds;
  if(minutes < 10)  
    minutes = '0' + minutes;
  if(hours < 10)  
    hours = '0' + hours;

  clockInfos.innerHTML = `
    <p>Ora actuala</p>
    <p>${hours} : ${minutes} : ${seconds}</p>
  `
}

setTime();
setInterval(setTime, 1000);