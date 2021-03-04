const fields = {
  counter: document.getElementById('counter'),
  perSecond: document.getElementById('per-sec'),
  clicker: document.getElementById('clicker-add'),
  oneMoreClick: document.getElementById('one-more-click'),
  doubleClick: document.getElementById('double-click'),
  totalCount: document.getElementById('total-count'),
  clickValue: document.getElementById('click-value'),
  passivePointOne: document.getElementById('passive-01'),
};

const cost = {};
let clicks = 0;
let coins = 0;
let quantity = 1;
let perSec = 0;

function buttonClicker(valueChanger) {
  valueChanger();
  return quantity;
}

function buttonPassive(value) {
  perSec += value;
  setInterval(() => {
    coins += value;
  }, 1000);
}

function actualCoins() {
  return coins;
}

function oneMoreCoin() {
  quantity += 1;
}

function doubleCoin() {
  quantity *= 2;
}

function prices() {
  cost.passivePointOne = 10;
  cost.oneMoreClick = 20;
  cost.doubleClick = 100;
}
prices();

function showFields() {
  fields.counter.innerHTML = `Bidcoins: ${coins.toFixed(2)}`;
  fields.totalCount.innerHTML = `Total clicks: ${clicks}`;
  fields.clickValue.innerHTML = `Click value: ${quantity}`;
  fields.perSecond.innerHTML = `Coins per second: ${perSec.toFixed(2)}`;
  fields.oneMoreClick.innerHTML = `ONE MORE BIDCOIN PER CLICK: ${cost.oneMoreClick}`;
  fields.doubleClick.innerHTML = `DOUBLE THE BIDCOIN PER CLICK: ${cost.doubleClick}`;
  fields.passivePointOne.innerHTML = `ADD 0.1 BIDCOIN PER SEC: ${cost.passivePointOne}`;
}

function disableButtons() {
  if (coins < cost.oneMoreClick) {
    fields.oneMoreClick.disabled = true;
  } else {
    fields.oneMoreClick.disabled = false;
  }
  if (coins < cost.doubleClick) {
    fields.doubleClick.disabled = true;
  } else {
    fields.doubleClick.disabled = false;
  }
  if (coins < cost.passivePointOne) {
    fields.passivePointOne.disabled = true;
  } else {
    fields.passivePointOne.disabled = false;
  }
}

function renderPage() {
  setInterval(() => {
    showFields();
    disableButtons();
  }, 10);
}

renderPage();

function handleButtonClick(action) {
  if (action === 'clicker') {
    clicks += 1;
    coins += quantity;
    buttonClicker(actualCoins);
  } else if (action === 'oneMoreClick') {
    buttonClicker(oneMoreCoin);
    coins -= cost.oneMoreClick;
    cost.oneMoreClick *= 2;
  } else if (action === 'doubleClick') {
    buttonClicker(doubleCoin);
    coins -= cost.doubleClick;
    cost.doubleClick *= 4;
  } else if (action === 'pointOnePassive') {
    buttonPassive(0.1);
    coins -= cost.passivePointOne;
    cost.passivePointOne += 10;
  }
  showFields();
  disableButtons();
}

fields.clicker.addEventListener('click', () => {
  handleButtonClick('clicker');
});
fields.oneMoreClick.addEventListener('click', () => {
  handleButtonClick('oneMoreClick');
});
fields.doubleClick.addEventListener('click', () => {
  handleButtonClick('doubleClick');
});
fields.passivePointOne.addEventListener('click', () => {
  handleButtonClick('pointOnePassive');
});
