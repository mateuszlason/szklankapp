import '../scss/main.scss';
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const buttonAdd = document.querySelector('.button__dodaj--js');
const buttonSubtract = document.querySelector('.button__usun--js');
let number = document.querySelector('.liczba--js');
number = 0;
number.innerHTML = number;

buttonAdd.addEventListener('click', () => {
number = number + 1;
number.document.innerHTML = numberO;
});
