const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.querySelector("#todoList");
const TODO_KEY = "todo";
let todoArray = [];

const todoButton = document.querySelector("#todoButton");
const todoArea = document.querySelector("#todoArea");

function showHide() {
  todoArea.classList.toggle("hidden");
}

function paintTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArray = todoArray.filter((item) => item.id !== parseInt(li.id));
  saveTodo();
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArray.push(todoObj);
  paintTodo(todoObj);
  saveTodo();
}

const savedArray = JSON.parse(localStorage.getItem(TODO_KEY));

if (savedArray !== null) {
  todoArray = savedArray;
  todoArray.forEach(paintTodo);
}

todoForm.addEventListener("submit", todoSubmit);
todoButton.addEventListener("click", showHide);
