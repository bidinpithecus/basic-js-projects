const shift = document.querySelector("#output-shift span");
const ctrl = document.querySelector("#output-ctrl span");
const alt = document.querySelector("#output-alt span");
const caps = document.querySelector("#output-caps span");
const neww = document.querySelector("#new");

document.addEventListener("keydown", function(e) {
  e.preventDefault();
  if (e.keyCode === 16) {
    shift.textContent = "True";
  } else {
    shift.textContent = "False";
  }

  if (e.keyCode === 20) {
    caps.textContent = "True";
  } else {
    caps.textContent = "False";
  }
  
  if (e.keyCode === 17) {
    ctrl.textContent = "True";
  } else {
    ctrl.textContent = "False";
  }
  alt.textContent = (e.keyCode === 18) ? "True" : "False";

  neww.innerHTML = `The character is "${e.key}" <br />Its code number is ${e.keyCode} <br />And his code is ${e.code}`;
});