const tags = document.querySelector(".tags");
var nnn = document.getElementsByClassName("keel");
console.log(nnn);
tags.addEventListener("click", selectFilter);
function selectFilter() {
  nnn.style.background = "pink";
}
