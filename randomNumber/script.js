const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const integers = document.getElementById('only-int');
const decimal = document.getElementById('only-float');
const intAndFloat = document.getElementById('int-and-float');
const generate = document.getElementById('generate');
const result = document.getElementById('result');

result.textContent = 0;
minRange.value = 0;
maxRange.value = 100;
let numMin;
let numMax;
let numGenerated;
let random;
let lastDigit;
let numGenInt;
let numGenFloat;

function minimum() {
  numMin = parseInt(minRange.value, 10);
  if (numMin > maxRange.value) {
    minRange.value = maxRange.value;
  }
  return numMin;
}

function maximum() {
  numMax = parseInt(maxRange.value, 10);
  if (numMax < parseInt(minRange.value, 10)) {
    maxRange.value = minRange.value;
  } else if (maxRange.value.length > 6) {
    maxRange.value = 999999;
  }
  return numMax;
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function onlyInt() {
  if (integers.checked) {
    result.textContent = Math.floor(numGenerated);
  }
}

function onlyFloat() {
  if (decimal.checked) {
    result.textContent = (numGenerated).toFixed(2);
  }
}

function floatToo() {
  if (intAndFloat.checked) {
    result.textContent = Number(lastDigit) % 2 === 0 ? numGenInt : numGenFloat;
  }
}

function buttonClick() {
  numGenerated = randomNumber(minimum(), maximum());
  numGenFloat = numGenerated.toFixed(2);
  numGenInt = Math.floor(numGenerated);
  random = String(Math.random());
  lastDigit = random[random.length - 1];
  onlyInt();
  onlyFloat();
  floatToo();
}

minRange.addEventListener('change', minimum);
minRange.addEventListener('keydown', minimum);
maxRange.addEventListener('change', maximum);
generate.addEventListener('click', buttonClick);
