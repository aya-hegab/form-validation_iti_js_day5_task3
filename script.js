var btnSubmit = document.getElementById("submit");
var btnReset = document.getElementById("reset");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var genderMale = document.getElementById("male");
var genderFemale = document.getElementById("female");
var bothGenders = document.getElementsByName("gender");
var allSports = document.querySelectorAll(`input[type="checkbox"]`);
var checkedSports = [];
var countrySelect = document.getElementById("country");
// var regGmail = /^[a-z]{3}@[0-9]{3}.com$/;
var regGmail = /[a-z0-9]+@gmail.com/;
var nameMsg = document.getElementById("nameMsg");
var emailMsg = document.getElementById("emailMsg");
var passMsg = document.getElementById("passMsg");
var genderMsg = document.getElementById("genderMsg");
var sportsMsg = document.getElementById("sportsMsg");
var countryMsg = document.getElementById("countryMsg");
var allInputs = document.getElementsByTagName("input");
var allMsgs = document.getElementsByClassName("msg");

function clearMsgs() {
  for (var i = 0; i < allMsgs.length; i++) {
    allMsgs[i].innerHTML = "";
  }
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  passInput.classList.remove("error");
}

function resetAll(e) {
  e.preventDefault();
  clearMsgs();
  for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].value = "";
  }
  for (var i = 0; i < bothGenders.length; i++) {
    bothGenders[i].checked = false;
  }
  for (var i = 0; i < allSports.length; i++) {
    allSports[i].checked = false;
  }
  countrySelect.value = "";
}

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  clearMsgs();

  if (nameInput.value == "") {
    nameMsg.innerHTML = "name is required";
    nameInput.classList.add("error");
  }
  if (emailInput.value == "") {
    emailMsg.innerHTML = "email is required";
    emailInput.classList.add("error");
  } else if (regGmail.test(emailInput.value) == false) {
    emailMsg.innerHTML = "Email is not valid";
  }
  if (passInput.value == "") {
    passMsg.innerHTML = "Password is required";
    passInput.classList.add("error");
  } else if (passInput.value.length < 8) {
    passMsg.innerHTML = "Password must be 8 chars at least";
  }
  if (genderFemale.checked == false && genderMale.checked == false) {
    genderMsg.innerHTML = "Please select your gender";
  }
  for (var i = 0; i < allSports.length; i++) {
    if (allSports[i].checked == true) {
      checkedSports.push(allSports[i]);
    }
  }
  if (checkedSports.length < 2) {
    sportsMsg.innerHTML = "Please select at least two sports";
  }
  if (countrySelect.value == "") {
    countryMsg.innerHTML = "Please select yout country";
  }
});

btnReset.addEventListener("click", resetAll);
