const shopList = [
  {
    item: 'Banana',
    qtd: 2,
    price: 1.25,
  },
  {
    item: 'Refri',
    qtd: 8,
    price: 3.5,
  },
];

const itemName = document.getElementById('item-name');
const itemQtd = document.getElementById('item-quantity');
const itemPrice = document.getElementById('item-price');
const finalPrice = document.getElementById('total-price');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');
const itemUnit = {};
let newItem;
let total = 0;
itemName.value = '';
itemQtd.value = 0;
itemPrice.value = 0;

function addToList() {
  shopList.forEach((unit) => {
    newItem = document.createElement('li');
    newItem.textContent = `${unit.qtd}x ${unit.item}: $${unit.price}`;
    itemList.append(newItem);
  });

  for (let i = 0; i < shopList.length; i += 1) {
    const item = shopList[i];
    total += item.price * item.qtd;
  }
  finalPrice.textContent = `Total cost is ${total}`;
}
addToList();

function addNewToList() {
  itemList.innerText = '';
  total = 0;
  itemUnit.item = itemName.value;
  itemUnit.qtd = parseInt(itemQtd.value, 10);
  itemUnit.price = parseFloat(itemPrice.value, 10);
  shopList.push(itemUnit);
  addToList();
}

addButton.addEventListener('click', addNewToList);
