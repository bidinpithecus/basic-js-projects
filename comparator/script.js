const number1 = document.getElementById("num-input1");
const number2 = document.getElementById("num-input2");
const txt1 = document.getElementById("txt-input1");
const txt2 = document.getElementById("txt-input2");
const txtSelector = document.getElementById("txt-selector")
const numSelector = document.getElementById("num-selector");
const numButton = document.getElementById("num-button");
const txtButton = document.getElementById("txt-button");
const numOutput = document.querySelector("#num-output span");
const txtOutput = document.querySelector("#txt-output span");

let newNum1 = 0;
let newNum2 = 0;
number1.value = 0;
number2.value = 0;

let newTxt1, newTxt2;
txt1.value = "";
txt2.value = "";

number1.addEventListener("change", function() {
  newNum1 = this.value;
});

number2.addEventListener("change", function() {
  newNum2 = this.value;
});

numButton.addEventListener("click", function() {
  newNum1 = parseInt(newNum1);
  newNum2 = parseInt(newNum2);

  if (numSelector.value === "equals-to") {
    numOutput.textContent = (newNum1 === newNum2) ? "True" : "False";

  }else if (numSelector.value === "less-than") {
    numOutput.textContent = (newNum1 < newNum2) ? "True" : "False";

  }else if (numSelector.value === "greater-than") {
    numOutput.textContent = (newNum1 > newNum2) ? "True" : "False";

  }else if (numSelector.value === "other-than") {
    numOutput.textContent = (newNum1 !== newNum2) ? "True" : "False";
  };
  
});

txtButton.addEventListener("click", function() {
  newTxt1 = txt1.value;
  newTxt2 = txt2.value;
  txtCompare = newTxt1.localeCompare(newTxt2);

  if (txtSelector.value === "same-to") {
    txtOutput.textContent = (txtCompare === 0) ? "True" : "False";

  }else if (txtSelector.value === "different-than") {
    txtOutput.textContent = (txtCompare === 0) ? "False" : "True";

  }else if (txtSelector.value === "longer-than") {
    txtOutput.textContent = (newTxt1.length > newTxt2.length) ? "True" : "False";

  }else if (txtSelector.value === "shorter-than") {
    txtOutput.textContent = (newTxt1.length < newTxt2.length) ? "True" : "False";
  };
});