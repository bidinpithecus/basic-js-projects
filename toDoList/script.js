const input = document.getElementById('input');
const form = document.getElementById('form');
const lista = document.getElementById('do');
let newElement;
let deleteButton;
let toDos;

try {
  toDos = JSON.parse(localStorage.getItem('toDoList'));
} catch {
  toDos = [];
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function renderPage() {
  if (!toDos) {
    toDos = [];
  }
  toDos.forEach((toDo, index) => {
    newElement = document.createElement('li');
    newElement.innerHTML = `${capitalize(toDo)} `;
    lista.append(newElement);
    deleteButton = document.createElement('button');
    deleteButton.id = index;
    deleteButton.classList = 'buttons';
    deleteButton.addEventListener('click', (e) => {
      lista.innerHTML = '';
      toDos.splice(parseInt(e.target.id, 10), 1);
      localStorage.setItem('toDoList', JSON.stringify(toDos));
      renderPage();
    });
    deleteButton.textContent = 'DELETE';
    newElement.appendChild(deleteButton);
  });
}
renderPage();

function addNewToList(e) {
  e.preventDefault();
  lista.innerHTML = '';
  if (input.value !== '') {
    toDos.push(input.value);
    localStorage.setItem('toDoList', JSON.stringify(toDos));
  }
  renderPage();
  input.value = '';
}

form.addEventListener('submit', addNewToList);
