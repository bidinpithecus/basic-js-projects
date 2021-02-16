const box = document.getElementById("box");
const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const css = document.getElementById("css");
const cssButton = document.getElementById("css-button");
const unit = "px";

topLeft.value = 0;
topRight.value = 0;
bottomLeft.value = 0;
bottomRight.value = 0;
box.style.borderTopLeftRadius = topLeft.value + unit;
box.style.borderTopRightRadius = topRight.value + unit;
box.style.borderBottomLeftRadius = bottomLeft.value + unit;
box.style.borderBottomRightRadius = bottomRight.value + unit;

function writeCss() {
  const border = [];

  border[0] = `border-top-left-radius: ${box.style.borderTopLeftRadius};`;
  border[1] = `border-top-right-radius: ${box.style.borderTopRightRadius};`;
  border[2] = `border-bottom-left-radius: ${box.style.borderBottomLeftRadius};`;
  border[3] = `border-bottom-right-radius: ${box.style.borderBottomRightRadius};`;

  css.value = border.join("\r\n");
};

writeCss();

cssButton.addEventListener("click", function() {
  writeCss();
});

topLeft.addEventListener("change", function() {
  if (parseInt(this.value) < 0) {
    this.value = 0;
  } else {
    box.style.borderTopLeftRadius = this.value + unit;
  }
});

topRight.addEventListener("change", function() {
  if (parseInt(this.value) < 0) {
    this.value = 0;
  } else {
    box.style.borderTopRightRadius = this.value + unit;
  }
});

bottomLeft.addEventListener("change", function() {
  if (parseInt(this.value) < 0) {
    this.value = 0;
  } else {
    box.style.borderBottomLeftRadius = this.value + unit;
  }
});

bottomRight.addEventListener("change", function() {
  if (parseInt(this.value) < 0) {
    this.value = 0;
  } else {
    box.style.borderBottomRightRadius = this.value + unit;
  }
});
