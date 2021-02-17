const number1 = document.getElementById("num-input1");
const number2 = document.getElementById("num-input2");
const selector = document.getElementById("num-selector");
const button = document.getElementById("num-button");
const output = document.querySelector("#num-output span")

let newNum1 = 0;
let newNum2 = 0;
number1.value = 0;
number2.value = 0;

number1.addEventListener("change", function() {
  newNum1 = parseInt(this.value);
  this.value = parseInt(this.value);
  console.log(newNum1);
});

number2.addEventListener("change", function() {
  newNum2 = parseInt(this.value);
  this.value = parseInt(this.value);
  console.log(newNum2);
});

button.addEventListener("click", function() {
  if (selector.value === "equals-to") {
    if (newNum1 === newNum2) {
      output.textContent = "True";
    } else {
      output.textContent = "False";
    };
  }else if (selector.value === "less-than") {
    if (newNum1 < newNum2) {
      output.textContent = "True";
    } else {
      output.textContent = "False";
    };
  }else if (selector.value === "greater-than") {
    if (newNum1 > newNum2) {
      output.textContent = "True";
    } else {
      output.textContent = "False";
    };
  }else if (selector.value === "other-than") {
    if (newNum1 !== newNum2) {
      output.textContent = "True";
    } else {
      output.textContent = "False";
    };
  }
});