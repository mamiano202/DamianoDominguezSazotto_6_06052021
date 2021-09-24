// Nav responsive
// function editNav() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
  
  // DOM Elements
  const modalBg = document.querySelector("#form-dialog");
  const modalBtn = document.querySelectorAll("#ph-contact");
  // const formData = document.querySelectorAll(".formData");
  
  // function displayConfirmation(display) {
  //   const modalConf = document.querySelector(".confsubmit");
  //   const modalBd = document.querySelector(".modal-body");
  
  //   if (display) {
  //     modalBd.style.display = "none";
  //     modalConf.style.display = "block";
  //   } else { 
  //     modalBd.style.display = "block";
  //     modalConf.style.display = "none";
  //   }
  // }
  
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
  
