import "../scss/main.scss";
import ('url')
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const buttonAdd = document.querySelector(".button__dodaj--js");
const buttonSubtract = document.querySelector(".button__usun--js");
const numberO = document.querySelector(".liczba--js");
const key = new Date().toISOString().slice(0, 10);


let number = 0;
buttonAdd.addEventListener("click", () => {
  number++;
  numberO.innerHTML = number;
  localStorage.setItem(key, number);
});

buttonSubtract.addEventListener("click", () => {
  if (number > 0) {
    number--;
    localStorage.setItem(key, number);
  }
  numberO.innerHTML = number;
});

if (localStorage.getItem(key)) {
    number = localStorage.getItem(key);
} else {
    localStorage.setItem(key, 0);
}
numberO.innerHTML = number;

