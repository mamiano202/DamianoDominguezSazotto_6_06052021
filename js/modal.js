// DOM Elements
const modalBg = document.querySelector("#form-dialog");
const modalBtn = document.querySelectorAll("#ph-contact");
modalBg.style.display = "none";


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
document.getElementById("closeform").addEventListener("click", closeModal);

// Launch modal form
function launchModal() {
  modalBg.style.display = "block";
}
function closeModal() {
  modalBg.style.display = "none";
}

// if Name ok
let firstNameImput = document.getElementById("first-name");
const firstErrorMsg = document.querySelector(".firstErrorMsg");
firstErrorMsg.style.display = "none";
firstNameImput.addEventListener("input", checkFirstName);
function checkFirstName() {
  const firstName = firstNameImput.value;
  console.log(firstName)
  const firstNameLong = firstName.length >= 2;

  if (firstNameLong) {
    firstNameImput.style.boxShadow = "0 0 5px 1px green";
    firstErrorMsg.style.display = "none";
  } else {
    firstNameImput.style.boxShadow = "0 0 5px 1px red";
    firstErrorMsg.style.display = "block";
    firstErrorMsg.style.color = "red";
    firstErrorMsg.style.fontSize = "13px";

  }
  // console.log(firstNameLong);
}
// if Last Name ok
let lastNameInput = document.getElementById("last-name");
lastNameInput.addEventListener("input", checkLastName);
const lastErrorMsg = document.querySelector(".lastErrorMsg");
lastErrorMsg.style.display = "none";

function checkLastName() {
  const lastName = lastNameInput.value;
  const lastNameLong = lastName.length >= 2;

  console.log(lastName);
  if (lastNameLong) {
    lastNameInput.style.boxShadow = "0 0 5px 1px green";
    lastErrorMsg.style.display = "none";
    // console.log("ok");
  } else {
    lastNameInput.style.boxShadow = "0 0 5px 1px red";
    lastErrorMsg.style.display = "block";
    lastErrorMsg.style.color = "red";
    lastErrorMsg.style.fontSize = "13px";

  }
  // console.log(lastNameLong);
}

// if Email OK
let mailInput = document.getElementById("email");
mailInput.addEventListener("input", validEmail);
const emailErrorMsg = document.querySelector(".emailErrorMsg");
emailErrorMsg.style.display = "none";
function validEmail() {
  const value = mailInput.value;

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  console.log(value);
  if (regexEmail.test(value)) {
    mailInput.style.boxShadow = "0 0 5px 1px green";
    emailErrorMsg.style.display = "none";
    console.log("L'email " + value + " est correct!.");
  } else {
    mailInput.style.boxShadow = "0 0 5px 1px red";
    emailErrorMsg.style.display = "block";
    emailErrorMsg.style.color = "red";
    emailErrorMsg.style.fontSize = "13px";

    console.log("email incorrect!.");
  }
  console.log(regexEmail.test(value));
}

// if Message ok
let messageImput = document.getElementById("message");
const messageErrorMsg = document.querySelector(".messageErrorMsg");
messageErrorMsg.style.display = "none";
messageImput.addEventListener("input", checkMessage);
function checkMessage() {
  const message = messageImput.value;
  console.log(message)
  const messageLong = message.length >= 2;

  if (messageLong) {
    messageImput.style.boxShadow = "0 0 5px 1px green";
    messageErrorMsg.style.display = "none";
    
  
  } else {
    messageImput.style.boxShadow = "0 0 5px 1px red";
    messageErrorMsg.style.display = "block";
    messageErrorMsg.style.color = "red";
    messageErrorMsg.style.fontSize = "13px";
    console.log(messageLong)
  }
  
}