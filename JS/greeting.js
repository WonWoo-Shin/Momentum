const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function logoutFunc() {
  greeting.classList.add(HIDDEN_CLASS);
  loginForm.classList.remove(HIDDEN_CLASS);
  localStorage.removeItem(USERNAME_KEY);
  loginInput.value = "";
  loginForm.addEventListener("submit", loginSubmit);
}

function paintGreeting(name) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${name}`;
  const logout = document.createElement("button");
  logout.id = "logout";
  logout.innerText = "✖";
  logout.addEventListener("click", logoutFunc);
  greeting.appendChild(logout);
}

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(savedUsername);
}
