passInp = document.getElementById("password");
passConfInp = document.getElementById("confPassword");
passDiv = document.getElementById("passDiv");
body = document.querySelector("body");

regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function checkPass() {
  if (passInp.value != passConfInp.value) {
    console.log("jugo");
  }
}

passInp.addEventListener("input", () => {
  if (regex.test(passInp.value)) {
    console.log("asd");
  }
});
