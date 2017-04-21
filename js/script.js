var link = document.querySelector(".main-address .button");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var userName = popup.querySelector("[name=name-input]");
var userMail = popup.querySelector("[name=mail]");
var userLetter = popup.querySelector(".letter");
var storageName = localStorage.getItem("userName");
var storageMail = localStorage.getItem("e-mail");
var form = popup.querySelector("form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storageName) {
    userName.value = storageName;
    if (storageMail) {
      userMail.value = storageMail;
      userLetter.focus();
    } else {
      userMail.focus();
    }
  } else userName.focus();
})

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
})

form.addEventListener("submit", function(event) {
  if (!userName.value || !userMail.value || userLetter.value==="В свободной форме") {
    event.preventDefault();
    popup.classList.add("modal-error");
  }  else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("e-mail", userMail.value);
  }
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27){
    if (popup.classList.contains("modal-content-show")){
      popup.classList.remove("modal-content-show");
    }
  }
})
