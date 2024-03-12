const username = "admin";
const password = "password";

function login() {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsername == username && inputPassword == password) {
    window.location.href = "todolist.html";
  } else {
    alert("Invalid username or password");
  }
}


document.getElementById("myButton").addEventListener("click", login);