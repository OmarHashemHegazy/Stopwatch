let [seconds, minutes, houres] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let timer = null;


function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      houres++;
    }
  }

  let h = houres < 10 ? "0" + houres : houres;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;


  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer !== null)  {
    clearInterval(timer)
  }
  timer = setInterval(stopwatch, 1000)
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, houres] = [0,0,0];
  displayTime.innerHTML = "00:00:00";
}