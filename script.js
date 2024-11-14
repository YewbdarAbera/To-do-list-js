// Selecting HTML elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Handling form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoInput.value);
  todoInput.value = '';
});

// Adding tasks to the list
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);
}