const validUsernamePasswords = [
  {
    username: "username1",
    password: "password1",
  },
  {
    username: "username2",
    password: "password2",
  },
  {
    username: "username3",
    password: "password3",
  },
  {
    username: "username4",
    password: "password4",
  },
];

// html nodes
const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const passwordTag = document.getElementById("error");

// Clears the error when data in inputs are changed
usernameField.onfocus = clearError;
passwordField.onfocus = clearError;

// should stop the user to come to login page from resume list page
window.history.forward();
function noBack() {
  window.history.forward();
}

// wipeout the error
function clearError() {
  passwordTag.innerText = "";
}

// onLoginClick when submit on the login page is clicked
loginForm.onsubmit = function (event) {
  onLoginClick(event);
};

// validates the info entered by users
// redirect the users to resume list page or shows the error based on entered data
function onLoginClick(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const currentUser = validUsernamePasswords.find((userData) => {
    return userData.username === username;
  });
  if (!currentUser) {
    passwordTag.innerText = "User doesn't exist";
  } else if (currentUser.password === password) {
    // Save Creds In Local Storage
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    // Navigate to resume viewer
    window.location.href = "./resume-page.html";
  } else {
    passwordTag.innerText = "Invalid Credentials";
  }
}
