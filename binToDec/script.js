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
  let sum;

  if (pressedKey === key.ENTER) {
    const value = binary.value;
    const valueArray = value.split("");
    const len = valueArray.length;
    sum = 0;

    for (let i = 0; len > i; i++) {
      const powers = valueArray[i] * (2 ** ((len - 1) - i));
      sum += powers;
    }

  } else if (!allowedKeys.includes(pressedKey)) {
    event.preventDefault();
    window.alert("Only 0's and 1's bruh")
  }
  decimal.textContent = sum;
});
