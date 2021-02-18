const binary = document.querySelector('#binary');
const decimal = document.querySelector('#decimal');
const key = {
  ENTER: 13,
  ZERO: 48,
  ONE: 49,
  BACKSPACE: 8,
  CTRL: 17,
};
const allowedKeys = [key.ENTER, key.ZERO, key.ONE, key.BACKSPACE, key.CTRL];

function binToDec(event) {
  const pressedKey = event.keyCode;
  const newValue = this.value;
  const valueArray = newValue.split('');
  const arrayLength = valueArray.length;
  let powers;
  let sum;

  if (pressedKey === key.ENTER) {
    powers = 0;
    sum = 0;

    for (let i = 0; i < arrayLength; i += 1) {
      powers = valueArray[i] * (2 ** ((arrayLength - 1) - i));
      sum += powers;
    }
  } else if (!allowedKeys.includes(pressedKey)) {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    window.alert('Only 0\'s and 1\'s bruh');
  }

  decimal.textContent = sum;
}

binary.addEventListener('keydown', binToDec);
