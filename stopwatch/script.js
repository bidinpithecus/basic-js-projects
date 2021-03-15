const buttons = {
  start: document.getElementById('start'),
  lap: document.getElementById('lap'),
  stop: document.getElementById('stop'),
  reset: document.getElementById('reset'),
  clearLaps: document.getElementById('clear-laps'),
};
const fields = {
  time: document.getElementById('time'),
  laps: document.getElementById('laps'),
};

let timeNow;
let times = [0, 0, 0, 0];
let eachLap;
let actualTime;

function stopwatch() {
  actualTime = `${times[3]}:${times[2]}:${times[1]}.${times[0] / 10}`;
  times[0] += 10;

  if (times[0] >= 100) {
    times[1] += 1;
    times[0] = 0;
  } else if (times[1] >= 60) {
    times[2] += 1;
    times[1] = 0;
  } else if (times[2] >= 60) {
    times[3] += 1;
    times[2] = 0;
  }
  fields.time.innerHTML = actualTime;
}

function handleButtonClick(action) {
  if (action === 'start') {
    timeNow = setInterval(stopwatch, 100);
    buttons.start.disabled = true;
    buttons.stop.disabled = false;
    buttons.lap.disabled = false;
    buttons.reset.disabled = false;
    buttons.clearLaps.disabled = false;
  } else if (action === 'lap') {
    eachLap = document.createElement('li');
    eachLap.innerHTML = actualTime;
    fields.laps.append(eachLap);
  } else if (action === 'stop') {
    clearInterval(timeNow);
    buttons.start.disabled = false;
    buttons.stop.disabled = true;
    buttons.lap.disabled = true;
  } else if (action === 'reset') {
    fields.time.innerHTML = '0:0:0.0';
    fields.laps.innerHTML = '';
    times = [0, 0, 0, 0];
  } else if (action === 'clearLaps') {
    fields.laps.innerHTML = '';
  }
}

buttons.start.addEventListener('click', () => {
  handleButtonClick('start');
});
buttons.lap.addEventListener('click', () => {
  handleButtonClick('lap');
});
buttons.stop.addEventListener('click', () => {
  handleButtonClick('stop');
});
buttons.reset.addEventListener('click', () => {
  handleButtonClick('reset');
});
buttons.clearLaps.addEventListener('click', () => {
  handleButtonClick('clearLaps');
});
