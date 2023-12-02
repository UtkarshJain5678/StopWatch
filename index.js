let sec = 0;
let min = 0;
let degree = 270;
let timer;
let circleMovement;

const startTimer = () => {
  document.getElementById("start-btn").setAttribute("disabled", true);
  document.getElementById("stop-btn").removeAttribute("disabled");
  timer = setInterval(function () {
    let minuteText = "";
    let secText = "";
    if (sec == 60) {
      sec = 0;
      min += 1;
      if (min < 10) minuteText = "0" + min;
      else minuteText = min;
      document.getElementById("min").innerText = minuteText;
    }
    sec += 1;
    if (sec < 10) secText = "0" + sec;
    else if (sec == 60) {
      secText = "00";
      // let temp =
      console.log(min);
      if (min < 10) {
        document.getElementById("min").innerText = "0" + (min + 1);
      } else document.getElementById("min").innerText = min;
    } else secText = sec;
    document.getElementById("sec").innerText = secText;
  }, 1000);

  circleMovement = setInterval(function () {
    degree += 6;
    if (degree === 624) {
      degree = 270;
    }
    setAngleForCircle(degree);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
  clearInterval(circleMovement);
  document.getElementById("start-btn").removeAttribute("disabled");
  document.getElementById("stop-btn").setAttribute("disabled", true);
};

const resetTimer = () => {
  clearInterval(timer);
  clearInterval(circleMovement);
  sec = 0;
  min = 0;
  degree = 270;
  document.getElementById("min").innerText = "0" + min;
  document.getElementById("sec").innerText = "0" + sec;
  setAngleForCircle(degree);
  document.getElementById("start-btn").removeAttribute("disabled");
  document.getElementById("stop-btn").setAttribute("disabled", true);
};

function setAngleForCircle(degrees) {
  const gradientValue = `linear-gradient(${degrees}deg, transparent 50%, #f0f0f0 50%), linear-gradient(${
    (degrees + 10) % 360
  }deg, #f0f0f0 50%, transparent 50%)`;
  document.getElementById("circle-border").style.backgroundImage =
    gradientValue;
}
