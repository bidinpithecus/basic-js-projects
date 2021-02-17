const binary = document.querySelector("#binary");
const decimal = document.querySelector("#decimal");
const key = {
  ENTER: 13,
  ZERO: 48,
  ONE: 49,
  BACKSPACE: 8,
  CTRL: 17
};
const allowedKeys = [key.ENTER, key.ZERO, key.ONE, key.BACKSPACE, key.CTRL];

binary.addEventListener("keydown", function(event) {
  const pressedKey = event.keyCode;
  const value = this.value;
  const valueArray = value.split("");
  const arrayLength = valueArray.length;
  let powers, sum;

  if (pressedKey === key.ENTER) {
    powers = 0;
    sum = 0;

    for (let i = 0; i < arrayLength; i++) {
      powers = valueArray[i] * (2 ** ((arrayLength - 1) - i));
      sum += powers;
    }

  } else if (!allowedKeys.includes(pressedKey)) {
    event.preventDefault();
    window.alert("Only 0's and 1's bruh")
  }

  decimal.textContent = sum;
});
