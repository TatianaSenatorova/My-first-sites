'use strict';

window.onload = () => {
    if (localStorage.getItem("cookieAccepted") == "1") {
      hidePopup();
    } else {
      showPopup();
    }
  };
  const cookieEl = document.querySelector(".user-agree");
  const agreeCookieEl = document.querySelector(".user-agree__button");
  
  function showPopup() {
    cookieEl.classList.remove("not-show");
  }
  
  function hidePopup() {
    cookieEl.classList.add("not-show");
  }
  
  agreeCookieEl.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "1");
    hidePopup();
  });