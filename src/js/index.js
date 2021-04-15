import "../scss/main.scss";

/* place your code below */

console.log("HELLO 🚀");

const buttonAdd = document.querySelector(".licznik-button__dodaj--js");
const buttonSubtract = document.querySelector(".licznik-button__usun--js");
const numberO = document.querySelector(".liczba--js");
const key = new Date().toISOString().slice(0, 10);
const tableContent = document.querySelector(".wyniki__tabela--js");
const woda = document.querySelector(".szklanka__woda");

let number = 0;

if (localStorage.getItem(key)) {
  number = localStorage.getItem(key);
} else {
  localStorage.setItem(key, 0);
}
woda.classList.add(`stage${number}`);
numberO.innerHTML = number;

buttonAdd.addEventListener("click", () => {
  number++;
  numberO.innerHTML = number;
  localStorage.setItem(key, number);

  if (number === 1) woda.classList.replace("stage0", "stage1");
  else if (number >= 3 && number <= 15 && number % 2 !== 0) {
    woda.classList.replace(`stage${number - 2}`, `stage${number}`);
  }
  getAllGlasses();
});

buttonSubtract.addEventListener("click", () => {
  if (number > 0) {
    number--;
    localStorage.setItem(key, number);
    if (number === 0)
      woda.classList.replace(`stage${number + 1}`, `stage${number}`);
    else if (number >= 1 && number <= 13 && number % 2 !== 0) {
      woda.classList.replace(`stage${number + 2}`, `stage${number}`);
    }
    getAllGlasses();
  }
  numberO.innerHTML = number;
});

//this way I can have my dates sorted right
function formatDate(unformatedDate) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Date(unformatedDate).toLocaleDateString("pl-PL", options);
}

function getRate(value) {
  if (value > 14) return "Hamuj! 😰";
  else if (value >= 12) return "Wspaniale 😎";
  else if (value >= 10) return "Bardzo dobrze 🤗";
  else if (value >= 8) return "Coraz bliżej celu 🤔";
  else if (value >= 6) return "Tragedia 🙄";
  else if (value >= 4) return "Odwodnienie 💧";
  else if (value >= 0) return "Śmierć 💀";
}

function getAllGlasses() {
  const storage = Object.keys(localStorage).sort((a, b) => {
    return new Date(b) - new Date(a);
  });
  let content = "";
  storage.forEach((key) => {
    let value = localStorage.getItem(key);
    content += `<tr><td>${formatDate(key)}</td><td>${value}</td><td>${getRate(
      value
    )}</td></tr>`;
    tableContent.innerHTML = content;
  });
}
getAllGlasses();
