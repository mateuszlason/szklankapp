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

function getRate(value) {
  if (value > 12) return "Hamuj! To za dużo! 😰";
  else if (value >= 8) return "Wspaniale 😎";
  else if (value >= 6) return "Okej.. 👍";
  else if (value >= 4) return "Słabo 🙅‍♀️";
  else if (value >= 0) return "Tragedia 💀";
}

function getAllGlasses() {
  let result = `<thead><tr><th>Data</th><th>Liczba szklanek</th><th>Ocena</th></tr></thead>
  <tbody>`;
  Object.keys(localStorage).forEach((key) => {
    let value = localStorage.getItem(key);
    result += `<tr><td>${key}</td><td>${value}</td><td>${getRate(
      value
    )}</td></tr>`;
  });
  result += `</tbody>`;
  tableContent.innerHTML = result;
}
getAllGlasses();
