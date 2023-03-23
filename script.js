function showPassword() {
  const inputPassword = document.querySelector(".form-password input");

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}

function changeEye() {
  const eyeImg = document.getElementById("eyeImg");

  if (eyeImg.src.match("./assets/eye.svg")) {
    eyeImg.src = "./assets/eye-off.svg";
    eyeImg.alt = "Ícone de um olho fechado";
  } else {
    eyeImg.src = "./assets/eye.svg";
    eyeImg.alt = "Ícone de um olho aberto";
  }
}

function input() {
  const inputEmail = document.querySelector(".email input");
  const errorMsg = document.querySelector(".error-message");

  if ((inputEmail.validity.valid === false) & (inputEmail.value.length != 0)) {
    errorMsg.removeAttribute("hidden");
    inputEmail.style.border = "solid 1px #ed3a5a";
  } else {
    errorMsg.setAttribute("hidden", "hidden");
    inputEmail.removeAttribute("style", "solid 1px #ed3a5a");
  }
}
