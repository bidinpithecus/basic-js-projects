/* eslint-disable prefer-const */
const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const integers = document.getElementById('only-int');
const decimal = document.getElementById('only-float');
const generate = document.getElementById('generate');
const result = document.getElementById('result');

result.textContent = 0;
minRange.value = 0;
maxRange.value = 100;
let numMin;
let numMax;

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

function getSelectedOption() {
  if (integers.checked) {
    return 'INTEGERS';
  }
  if (decimal.checked) {
    return 'FLOAT';
  }
  return 'BOTH';
}

function randomInt() {
  return Math.floor(Math.random() * (maximum() - minimum() + 1) + minimum());
}

function randomFloat() {
  return (Math.random() * (maximum() - minimum()) + minimum()).toFixed(2);
}

function randomNumber() {
  const selectedOption = getSelectedOption();
  let random;
  let lastDigit;

  if (selectedOption === 'INTEGERS') {
    return randomInt();
  }
  if (selectedOption === 'FLOAT') {
    return randomFloat();
  }
  random = String(Math.random());
  lastDigit = random[random.length - 1];
  return Number(lastDigit) % 2 === 0 ? randomInt() : randomFloat();
}

function buttonClick() {
  result.textContent = randomNumber();
}

minRange.addEventListener('change', minimum);
maxRange.addEventListener('change', maximum);
generate.addEventListener('click', buttonClick);
