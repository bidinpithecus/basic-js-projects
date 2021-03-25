/* eslint-disable prefer-destructuring */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const fields = {
  canvas: document.getElementById('canvas'),
  allVertices: document.getElementById('all-vertices'),
  calculate: document.getElementById('calculate'),
  area: document.getElementById('area'),
  perimeter: document.getElementById('perimeter'),
  type: document.getElementById('type'),
};
const ctx = fields.canvas.getContext('2d');
ctx.fillStyle = 'rgb(160, 160, 160)';
let verticesNum;
let sum = 0;
let typeTriangle;
let areaTriangle;
let orderedNums;
let semiPerimeter;
let semiPerimeter2;
let nonRepeat;
let repeatedTwice;

function perimeterTriangle() {
  sum = 0;
  verticesNum.forEach((number) => {
    sum += number;
  });
  return sum;
}

function getHighestRepeatItem(array) {
  const itens = {};

  array.forEach((item) => {
    itens[item] = (itens[item] || 0) + 1;
    if (itens[item] === 2) {
      repeatedTwice = item;
    }
  });
  return Math.max(...Object.values(itens));
}

function typeAndArea() {
  ctx.clearRect(0, 0, fields.canvas.width, fields.canvas.height);
  semiPerimeter2 = 1;
  orderedNums = verticesNum.sort((a, b) => a - b);
  if (getHighestRepeatItem(verticesNum) === 3) {
    typeTriangle = 'Equilateral';
    areaTriangle = ((Math.sqrt(3)) / 4) * verticesNum[0] ** 2;
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(230, 140);
    ctx.lineTo(70, 140);
    ctx.fill();
  } else if (getHighestRepeatItem(verticesNum) === 2) {
    if (repeatedTwice === orderedNums[0]) {
      nonRepeat = orderedNums[2];
    }
    typeTriangle = 'Isosceles';
    areaTriangle = nonRepeat / 2 * Math.sqrt(repeatedTwice ** 2 - (nonRepeat ** 2 / 4));
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(80, 150);
    ctx.lineTo(220, 150);
    ctx.fill();
  } else if (getHighestRepeatItem(verticesNum) === 1) {
    typeTriangle = 'Scalene';
    semiPerimeter = perimeterTriangle() / 2;
    orderedNums.forEach((number) => {
      semiPerimeter2 *= Number(semiPerimeter - number);
    });
    areaTriangle = Math.sqrt(semiPerimeter * semiPerimeter2);
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(0, 150);
    ctx.fill();
  }
}

function fillFields() {
  fields.area.innerHTML = `Area: ${areaTriangle.toFixed(2)}`;
  fields.perimeter.innerHTML = `Perimeter: ${perimeterTriangle()}`;
  fields.type.innerHTML = `Type: ${typeTriangle}`;
}

function validateTriangle() {
  verticesNum = fields.allVertices.value.split(';').map((item) => Number(item));
  if (verticesNum.length === 3 && verticesNum.every((item) => Boolean(item))) {
    typeAndArea();
    if (orderedNums[0] > (orderedNums[2] - orderedNums[1])) {
      fillFields();
    } else {
      ctx.clearRect(0, 0, fields.canvas.width, fields.canvas.height);
      ctx.font = '36px consolas';
      ctx.fillText('Invalid option', 0, 85);
      document.querySelectorAll('.results').forEach((item) => item.innerHTML = 'Invalid option');
    }
  }
}

fields.calculate.addEventListener('click', validateTriangle);
