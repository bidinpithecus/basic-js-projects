const number1 = document.getElementById('num-input1');
const number2 = document.getElementById('num-input2');
const txt1 = document.getElementById('txt-input1');
const txt2 = document.getElementById('txt-input2');
const txtSelector = document.getElementById('txt-selector');
const numSelector = document.getElementById('num-selector');
const numButton = document.getElementById('num-button');
const txtButton = document.getElementById('txt-button');
const numOutput = document.querySelector('#num-output span');
const txtOutput = document.querySelector('#txt-output span');

let newNum1;
let newNum2;
number1.value = 0;
number2.value = 0;

let newTxt1;
let newTxt2;
txt1.value = '';
txt2.value = '';

function numberOutput() {
  newNum1 = parseInt(number1.value, 10);
  newNum2 = parseInt(number2.value, 10);

  if (numSelector.value === 'equals-to') {
    numOutput.textContent = String(newNum1 === newNum2);
  } else if (numSelector.value === 'less-than') {
    numOutput.textContent = String(newNum1 < newNum2);
  } else if (numSelector.value === 'greater-than') {
    numOutput.textContent = String(newNum1 > newNum2);
  } else if (numSelector.value === 'other-than') {
    numOutput.textContent = String(newNum1 !== newNum2);
  }
}

function textOutput() {
  newTxt1 = txt1.value;
  newTxt2 = txt2.value;
  if (txtSelector.value === 'same-to') {
    txtOutput.textContent = String(newTxt1 === newTxt2);
  } else if (txtSelector.value === 'different-than') {
    txtOutput.textContent = String(newTxt1 !== newTxt2);
  } else if (txtSelector.value === 'longer-than') {
    txtOutput.textContent = String(newTxt1.length > newTxt2.length);
  } else if (txtSelector.value === 'shorter-than') {
    txtOutput.textContent = String(newTxt1.length < newTxt2.length);
  }
}

numButton.addEventListener('click', numberOutput);

txtButton.addEventListener('click', textOutput);
