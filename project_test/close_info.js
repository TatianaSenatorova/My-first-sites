"use strict";

const infoButtonEl = document.querySelector(".info__button");
const infoContentEl = document.querySelector(".info");

infoButtonEl.addEventListener("click", () => {
  infoContentEl.classList.add("hide");
});
