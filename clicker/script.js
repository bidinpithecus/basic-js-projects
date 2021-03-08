const fields = {
  counter: document.getElementById('counter'),
  perSecond: document.getElementById('per-sec'),
  clicker: document.getElementById('clicker-add'),
  oneMoreClick: document.getElementById('one-more-click'),
  doubleClick: document.getElementById('double-click'),
  totalCount: document.getElementById('total-count'),
  clickValue: document.getElementById('click-value'),
  passivePointOne: document.getElementById('passive-01'),
  doublePassive: document.getElementById('passive-double'),
};

const cost = {
  oneMoreClick: 30,
  doubleClick: 100,
  passivePointOne: 10,
  doublePassive: 150,
};

let clicks = 0;
let coins = 0;
let clickValue = 1;
let coinsPerSec = 0;

function actualCoins() {
  coins += clickValue;
}

function buttonClicker(valueChanger) {
  valueChanger();
  return coins;
}

function oneMoreCoin() {
  clickValue += 1;
  coins -= cost.oneMoreClick;
  cost.oneMoreClick *= 2.5;
}

function doubleCoin() {
  clickValue *= 2;
  coins -= cost.doubleClick;
  cost.doubleClick *= 4.5;
}

function buttonPassive(valueChanger) {
  valueChanger();
}

function pointOnePassive() {
  coinsPerSec += 0.1;
  coins -= cost.passivePointOne;
  cost.passivePointOne *= 1.75;
}

function doublePassiveCoins() {
  coinsPerSec *= 2;
  coins -= cost.doublePassive;
  cost.doublePassive *= 4.5;
}

function showFields() {
  fields.counter.innerHTML = `Bidcoins: ${coins.toFixed(2)}`;
  fields.totalCount.innerHTML = `Total clicks: ${clicks}`;
  fields.clickValue.innerHTML = `Click value: ${clickValue}`;
  fields.perSecond.innerHTML = `Coins per second: ${coinsPerSec.toFixed(2)}`;
  fields.oneMoreClick.innerHTML = `ONE MORE BIDCOIN PER CLICK: ${cost.oneMoreClick.toFixed(2)}`;
  fields.doubleClick.innerHTML = `DOUBLE THE BIDCOIN PER CLICK: ${cost.doubleClick.toFixed(2)}`;
  fields.passivePointOne.innerHTML = `ADD 0.1 BIDCOIN PER SEC: ${cost.passivePointOne.toFixed(2)}`;
  fields.doublePassive.innerHTML = `DOUBLE THE BIDCOINS PER SEC: ${cost.doublePassive.toFixed(2)}`;
}

function disableButtons() {
  if (coins >= cost.oneMoreClick) {
    fields.oneMoreClick.disabled = false;
  } else {
    fields.oneMoreClick.disabled = true;
  }
  if (coins >= cost.doubleClick) {
    fields.doubleClick.disabled = false;
  } else {
    fields.doubleClick.disabled = true;
  }
  if (coins >= cost.passivePointOne) {
    fields.passivePointOne.disabled = false;
  } else {
    fields.passivePointOne.disabled = true;
  }
  if (coins >= cost.doublePassive && coinsPerSec !== 0) {
    fields.doublePassive.disabled = false;
  } else {
    fields.doublePassive.disabled = true;
  }
}

disableButtons();

function renderPage() {
  setInterval(() => {
    showFields();
    disableButtons();
    coins += coinsPerSec;
  }, 1000);
}

renderPage();

function handleButtonClick(action) {
  if (action === 'clicker') {
    actualCoins();
    clicks += 1;
  } else if (action === 'oneMoreClick') {
    buttonClicker(oneMoreCoin);
  } else if (action === 'doubleClick') {
    buttonClicker(doubleCoin);
  } else if (action === 'passivePointOne') {
    buttonPassive(pointOnePassive);
  } else if (action === 'doublePassive') {
    buttonPassive(doublePassiveCoins);
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
  handleButtonClick('passivePointOne');
});
fields.doublePassive.addEventListener('click', () => {
  handleButtonClick('doublePassive');
});
