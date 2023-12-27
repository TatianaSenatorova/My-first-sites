"use strict";

const arrowEls = document.querySelectorAll(".skills__arr-container");

const skillsShutEls = document.querySelectorAll(".skills__shut");

arrowEls.forEach((el) => {
  el.addEventListener("click", () => {
    openShutCard(el);
  });
});

skillsShutEls.forEach((el) => {
  el.addEventListener("click", () => {
    openShutCard(el);
  });
});

function openShutCard(el) {
  const parentEl = el.closest(".skills__card");
  const activeSkillsLeftContainer = parentEl.querySelector(
    ".skills__left-container"
  );
  activeSkillsLeftContainer.classList.toggle("off");
  activeSkillsLeftContainer.classList.toggle("active_skill");
}
