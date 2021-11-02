// DOM Elements
const modal = document.querySelector(".pop");
const titre = document.querySelector(".titre");
const date = document.querySelector(".date");
const modalBton = document.querySelectorAll(".sort-btn");
const closeList = document.querySelector(".up");
console.log(closeList)
const openList = document.querySelector(".down");
// console.log(closeList);
date.style.display = "none";
titre.style.display = "none";
closeList.style.display = "none";

// launch modal event
modalBton.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
closeList.addEventListener("click", closeModal);

// Launch modal form
function launchModal() {
  date.style.display = "block";
  titre.style.display = "block";
  closeList.style.display = "block";
  openList.style.display = "none";
  
}
function closeModal() {
  
  date.style.display = "none";
  titre.style.display = "none";
  openList.style.display = "block";
  
}

// // DOM Elements
// const modal = document.querySelector("#hidden-sort");
// const modalBton = document.querySelectorAll(".sort-btn");
// const closeList = document.querySelector(".closeList")
// console.log(closeList)
// modal.style.display = "none";

// // launch modal event
// modalBton.forEach((btn) => btn.addEventListener("click", launchModal));

// // close modal form
// closeList.addEventListener("click", closeModal);

// // Launch modal form
// function launchModal() {
//   modal.style.display = "flex";
// }
// function closeModal() {
//   modal.style.display = "none";
// }
