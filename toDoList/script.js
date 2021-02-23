const toDos = ['ITEM0', 'teste', 'vini', 'verde'];
const input = document.getElementById('input');
const form = document.getElementById('form');
const lista = document.getElementById('do');
let newElement;

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function addToList() {
  toDos.forEach((toDo) => {
    newElement = document.createElement('li');
    newElement.textContent = capitalize(toDo);
    lista.append(newElement);
  });
}
addToList();

function addNewToList(e) {
  e.preventDefault();
  lista.innerText = '';
  toDos.push(input.value);
  addToList();
}

form.addEventListener('submit', addNewToList);
