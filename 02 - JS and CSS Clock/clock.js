const clockSeconds = document.querySelector('.second-hand');
const clockMin = document.querySelector('.min-hand');
const clockHour = document.querySelector('.hour-hand');

function setClock() {
  const date = new Date();

  const second = date.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  clockSeconds.style.transform = `rotate(${secondDegree}deg)`;

  const minute = date.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 90;
  clockMin.style.transform = `rotate(${minuteDegree}deg)`;

  const hour = date.getHours();
  const hourDegree = (hour / 60) * 360 + 90;
  clockHour.style.transform = `translate(65%) rotate(${hourDegree}deg)`;
}

setInterval(setClock, 1000);
setClock();
