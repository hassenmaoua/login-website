function onPress() {
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;

  if (email === "admin" && password === "admin") {
    window.location.href = "index.html";
    alert("Logged in succesfully!");
  } else
    document.getElementById("errorMessage").innerHTML =
      "Invalid Email/Password combination.";
}

function clearErrors() {
  document.getElementById("errorMessage").innerHTML = "";
}

document.getElementById("inputEmail").onkeydown = function () {
  clearErrors();
};

document.getElementById("inputPassword").onkeydown = function () {
  clearErrors();
};

var inputPassword = document.getElementById("inputPassword");

inputPassword.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    onPress();
  }
});
