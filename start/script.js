"use strict";

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.querySelector(".data");
const toggleEl = document.querySelector(".toggle");

toggleEl.addEventListener("click", function (e) {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Light mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Dark mode";
  }
});
