const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

document.getElementById("firstNameInput").onblur = function () {
  var name = document.getElementById("firstNameInput").value;
  if (name.length > 0 && name.length < 4)
    document.getElementById("firstNameError").innerHTML =
      "Too Short First Name!";
};

document.getElementById("firstNameInput").onkeydown = function () {
  document.getElementById("firstNameError").innerHTML = "";
};

document.getElementById("lastNameInput").onblur = function () {
  var name = document.getElementById("lastNameInput").value;
  if (name.length > 0 && name.length < 4)
    document.getElementById("lastNameError").innerHTML = "Too Short Last Name!";
};

document.getElementById("lastNameInput").onkeydown = function () {
  document.getElementById("lastNameError").innerHTML = "";
};

document.getElementById("emailInput").onblur = function () {
  var email = document.getElementById("emailInput").value;

  if (email.length > 0 && !validateEmail(email))
    document.getElementById("emailError").innerHTML = "Invalid email address!";
};

document.getElementById("emailInput").onkeydown = function () {
  document.getElementById("emailError").innerHTML = "";
};

document.getElementById("passwordInput").onblur = function () {
  var password = document.getElementById("passwordInput").value;

  if (password.length > 0 && password.length < 6)
    document.getElementById("passwordError").innerHTML = "Too short password!";
};

document.getElementById("passwordInput").onkeydown = function () {
  document.getElementById("passwordError").innerHTML = "";
};

document.getElementById("confirmPasswordInput").onblur = function () {
  var confirm = document.getElementById("confirmPasswordInput").value;
  var password = document.getElementById("passwordInput").value;

  if (confirm.length > 0 && confirm != password)
    document.getElementById("confirmPasswordError").innerHTML =
      "Password dosn't match!";
};

document.getElementById("confirmPasswordInput").onkeydown = function () {
  document.getElementById("confirmPasswordError").innerHTML = "";
};

function pressButton() {
  const account = {
    firstName: document.getElementById("firstNameInput").value,
    lastName: document.getElementById("lastNameInput").value,
    email: document.getElementById("emailInput").value,
    password: document.getElementById("passwordInput").value,
  };

  alert(
    "Name : " +
      account.firstName +
      " " +
      account.lastName +
      "\nEmail : " +
      account.email +
      "\nPassword : " +
      account.password
  );
}
