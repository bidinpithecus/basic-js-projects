const binary = document.querySelector("#binary");
const decimal = document.querySelector("#decimal");
let value = 0;



binary.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    value = binary.value;
    valueArray = value.split("");
    len = valueArray.length;
    sum = 0;
    for (var i = 0; len > i; i++) {
      var powers = valueArray[i] * (2 ** ((len - 1) - i));
      sum += powers;

    }
    console.log(sum);
  } else if ((event.keyCode !== 48) && (event.keyCode !== 49) && (event.keyCode !== 8) && (event.keyCode !== 17)) {
    window.alert("Only 0's and 1's bruh")
    binary.value = "";
  }
  decimal.textContent = sum

})
