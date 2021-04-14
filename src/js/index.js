import "../scss/main.scss";

/* place your code below */

console.log("HELLO 🚀");

const buttonAdd = document.querySelector(".szklanka-button__dodaj--js");
const buttonSubtract = document.querySelector(".szklanka-button__usun--js");
const numberO = document.querySelector(".liczba--js");
const key = new Date().toISOString().slice(0, 10);
const tableContent = document.querySelector(".wyniki__tabela--js");

let number = 0;
buttonAdd.addEventListener("click", () => {
  number++;
  numberO.innerHTML = number;
  localStorage.setItem(key, number);
  getAllGlasses();
});

buttonSubtract.addEventListener("click", () => {
  if (number > 0) {
    number--;
    localStorage.setItem(key, number);
    getAllGlasses();
  }
  numberO.innerHTML = number;
});

if (localStorage.getItem(key)) {
  number = localStorage.getItem(key);
} else {
  localStorage.setItem(key, 0);
}
numberO.innerHTML = number;

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
