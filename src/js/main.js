"use strict";

const input = document.querySelector(".js-input");
const button = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");
const tryInput = document.querySelector(".js-try");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const number = getRandomNumber(100);
console.log(`Mi número aleatorio es ${number}`);

function trackEl(string) {
  clue.innerHTML = string;
}
function feedbackLogic() {
  const numberInput = parseInt(input.value);
  if (numberInput === number) {
    trackEl("Has ganado campeona!!!");
  } else if (isNaN(numberInput) || numberInput < 1 || numberInput > 100) {
    trackEl("El número debe estar entre 1 y 100");
  } else if (numberInput > number) {
    trackEl("Demasiado alto");
  } else if (numberInput < number) {
    trackEl("Demasiado bajo");
  }
  console.log(`Contenido del input: ${numberInput}`);
}
let tryNumber = 0;
function counterLogic() {
  tryNumber += 1;
  tryInput.innerHTML = tryNumber;
}
function getNumber() {
  feedbackLogic();
  counterLogic();
}

button.addEventListener("click", getNumber);
