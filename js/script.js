"use strict";

// Toggle Menu Function in small  devices

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("menu-close");
const navbarlinks = document.querySelector("nav .navbar ul");

menuBtn.addEventListener("click", function () {
  navbarlinks.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  navbarlinks.classList.remove("active");
});

//Home Page
document.addEventListener("DOMContentLoaded", function () {
  const typed1 = initializeTyped(
    ".auto-input1",
    "YOUR GATEWAY TO WORLD CLASS...."
  );
});
