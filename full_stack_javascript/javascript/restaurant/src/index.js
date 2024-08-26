import header from "./js/header.js";
import menu from "./js/menu.js";
import about from "./js/about.js";

const pageDisplay = document.querySelector("#content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

pageDisplay.innerHTML = header();

homeButton.addEventListener("click", () => {
  pageDisplay.innerHTML = header();
});

menuButton.addEventListener("click", () => {
  pageDisplay.innerHTML = menu();
});

aboutButton.addEventListener("click", () => {
  pageDisplay.innerHTML = about();
});
