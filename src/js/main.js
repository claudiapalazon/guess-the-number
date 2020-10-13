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

let tryNumber = 0;

function getNumber() {
  tryNumber += 1;
  tryInput.innerHTML = tryNumber;
  const numberInput = parseInt(input.value);
  if (numberInput === number) {
    clue.innerHTML = "Has ganado campeona!!!";
  } else if (numberInput < 1 || numberInput > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
  } else if (numberInput > number) {
    clue.innerHTML = "Demasiado alto";
  } else if (numberInput < number) {
    clue.innerHTML = "Demasiado bajo";
  }
  console.log(`Contenido del input: ${numberInput}`);
}

button.addEventListener("click", getNumber);
