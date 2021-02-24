const visor = document.getElementById('result');
const length = document.getElementById('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generator = document.getElementById('generate');
const upperCaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseList = 'abcdefghijklmnopqrstuvwxyz';
const numbersList = '0123456789';
const symbolsList = '!@#$%&*(){}[]';
let result = '';
let totalList = '';

function corrector() {
  if (length.value > 24) {
    length.value = this.max;
  }
}

function upperCaseMarked() {
  if (upperCase.checked) {
    totalList += upperCaseList;
  }
}

function lowerCaseMarked() {
  if (lowerCase.checked) {
    totalList += lowerCaseList;
  }
}

function numbersMarked() {
  if (numbers.checked) {
    totalList += numbersList;
  }
}

function symbolsMarked() {
  if (symbols.checked) {
    totalList += symbolsList;
  }
}

function randomChoice(list) {
  result = '';
  for (let i = 0; i < length.value; i += 1) {
    result += (list.charAt(Math.floor(Math.random() * list.length)));
  }
  visor.textContent = result;
}

function finalResult() {
  totalList = '';
  upperCaseMarked();
  lowerCaseMarked();
  numbersMarked();
  symbolsMarked();
  randomChoice(totalList);
}

length.addEventListener('change', corrector);
generator.addEventListener('click', finalResult);
