const passInp = document.getElementById("password");
const passConfInp = document.getElementById("confPassword");
const passDiv = document.getElementById("passDiv");
const confPassDiv = document.getElementById("confPassDiv");
const body = document.querySelector("body");
const imgDiv = document.getElementById("imgDiv");
const passText = document.getElementById("passText");
const confPassText = document.getElementById("confPassText");
const nameInp = document.getElementById("name");
const lastName = document.getElementById("lastName");
const eMail = document.getElementById("e-mail");
const telNum = document.getElementById("telNum");
const nameSpan = document.getElementById("nameSpan");
const lastNameSpan = document.getElementById("lastNameSpan");
const eMailSpan = document.getElementById("e-mailSpan");
const telNumSpan = document.getElementById("telNumSpan");
const passSpan = document.getElementById("passSpan");
const confPassSpan = document.getElementById("confPassSpan");

const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

nameInp.addEventListener("input", () => {
  if (nameInp.checkValidity()) {
    nameSpan.style.display = "block";
  } else {
    nameSpan.style.display = "none";
  }
});

lastName.addEventListener("input", () => {
  if (lastName.checkValidity() && lastName.value != "") {
    lastNameSpan.style.display = "block";
  } else {
    lastNameSpan.style.display = "none";
  }
});

eMail.addEventListener("input", () => {
  if (eMail.checkValidity()) {
    eMailSpan.style.display = "block";
  } else {
    eMailSpan.style.display = "none";
  }
});

telNum.addEventListener("input", () => {
  if (telNum.checkValidity() && telNum.value != "") {
    telNumSpan.style.display = "block";
  } else {
    telNumSpan.style.display = "none";
  }
});

passInp.addEventListener("input", () => {
  if (passInp.checkValidity()) {
    passSpan.style.display = "block";
  } else {
    passSpan.style.display = "none";
  }
});

passConfInp.addEventListener("input", () => {
  if (passInp.value === passConfInp.value) {
    passConfInp.setCustomValidity("");
  } else {
    passConfInp.setCustomValidity("Please match password");
  }
});

passConfInp.addEventListener("input", () => {
  if (passConfInp.checkValidity()) {
    confPassSpan.style.display = "block";
    console.log(passConfInp.checkValidity());
  } else {
    confPassSpan.style.display = "none";
  }
});

passInp.addEventListener("focus", () => {
  passText.textContent = "Min 8 char, 1 letter and 1 number";
  passDiv.appendChild(passText);
});

passInp.addEventListener("blur", () => {
  passText.textContent = "";
});

passConfInp.addEventListener("focus", () => {
  confPassText.textContent = "Repeat password";
  confPassDiv.appendChild(confPassText);
});

passConfInp.addEventListener("blur", () => {
  confPassText.textContent = "";
});
