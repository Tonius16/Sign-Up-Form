const passInp = document.getElementById("password");
const passConfInp = document.getElementById("confPassword");
const passDiv = document.getElementById("passDiv");
const confPassDiv = document.getElementById("confPassDiv");
const body = document.querySelector("body");

const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function checkPass() {
  if (passInp.value != passConfInp.value) {
    console.log("jugo");
  }
}

/*passInp.addEventListener("click", () => {
  if (regex.test(passInp.value) != true) {
    regExText = document.createElement("p");
    regExText.classList.add("rexExText");
    regExText.textContent = "asd";
    passDiv.appendChild(regExText);
  }
});*/

passConfInp.addEventListener("input", () => {
  if (passInp.value === passConfInp.value) {
    passConfInp.setCustomValidity("");
  } else {
    passConfInp.setCustomValidity("Please match password");
  }
});

passInp.addEventListener("focus", () => {
  enterPassTxt = document.createElement("p");
  enterPassTxt.textContent = "Min 8 char, 1 letter and 1 number";
  passDiv.appendChild(enterPassTxt);
});

passInp.addEventListener("blur", () => {
  enterPassTxt.remove();
});

passConfInp.addEventListener("focus", () => {
  enterPassConfTxt = document.createElement("p");
  enterPassConfTxt.textContent = "Repeat password";
  confPassDiv.appendChild(enterPassConfTxt);
});

passConfInp.addEventListener("blur", () => {
  enterPassConfTxt.remove();
});
