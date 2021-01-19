import "../scss/main.scss";
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const buttonAdd = document.querySelector(".button__dodaj--js");
const buttonSubtract = document.querySelector(".button__usun--js");
const numberO = document.querySelector(".liczba--js");

let number = 0;
numberO.innerHTML = number;
buttonAdd.addEventListener("click", () => {
  number = number + 1;
  numberO.innerHTML = number;
});

<<<<<<< HEAD

buttonSubtract.addEventListener('click', () => {
    number = number - 1;
    document.querySelector('.liczba--js').innerHTML = number;
    if (number < 0) {
    number = 0;
    document.querySelector('.liczba--js').innerHTML = number;
    }
    });
    
=======
buttonSubtract.addEventListener("click", () => {
  number = number - 1;
  numberO.innerHTML = number;
  if (number < 0) {
    number = 0;
    numberO.innerHTML = number;
  }
});
>>>>>>> jstest
