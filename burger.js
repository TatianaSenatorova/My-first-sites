"use strict";

const headerBurgerEl = document.querySelector(".header__burger");
const bodyEl = document.querySelector("body");
const burgerMenuEl = document.querySelector(".header__burger-nav");

headerBurgerEl.addEventListener("click", () => {
  bodyEl.classList.toggle("noscroll");
  headerBurgerEl.classList.toggle("open");
  renderMenu();
});

function renderMenu() {
  burgerMenuEl.classList.toggle("open-menu");
}

const linkEls = Array.from(burgerMenuEl.children);

linkEls.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  burgerMenuEl.classList.remove("open-menu");
  headerBurgerEl.classList.remove("open");
  bodyEl.classList.remove("noscroll");
}





