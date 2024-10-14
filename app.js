let timer;
let isRunning = false;
let seconds = 0,
  minutes = 0,
  hours = 0;

function updateDisplay() {
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let hr = hours < 10 ? "0" + hours : hours;
  document.getElementById("display").textContent = `${hr}:${min}:${sec}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
