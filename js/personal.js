"use strict";

let personInput, personsWindow, resultText, IdNumber, nameInputsText, billInputsValue, checkboxPerson,containerPerson;

personInput = document.querySelector("#numPeople");
personsWindow = document.querySelector(".container-for-persons");
resultText = document.querySelector(".js-list-of-person-results");

containerPerson = document.querySelectorAll('.list-of-person');
IdNumber = document.querySelectorAll(".number-text");
nameInputsText = document.querySelectorAll(".person-name");
billInputsValue = document.querySelectorAll(".person-bill");
checkboxPerson = document.querySelectorAll(".checkbox-person");

// personInput.addEventListener('input', () => {
//   if( personInput.value > 0 || personInput.value === "") {
//       personInput.classList.remove('red-input');
//       label.classList.add('hidden');
//   } else {
//       personInput.classList.add('red-input');
//       label.classList.remove('hidden');
//   }
// });

personInput.addEventListener("input", function createInputs() {
  let clearDivs = document.querySelectorAll(".container-for-persons");
  let clearResurtDivs = document.querySelectorAll('.js-list-of-person-results');

  clearDivs.forEach((e) => {
    e.innerHTML = "";
  });
  clearResurtDivs.forEach((e) => {
    e.innerHTML = "";
  });

  let valuePersons = personInput.value;

  for (let index = 1; index <= valuePersons; index++) {

    personsWindow.innerHTML += `<div class="list-of-person">
    <p class="number number-text" id="${index}">${index}</p>
    <input type="text" class="person-name input">
    <input type="number" class="person-bill input">
  </div>`;

    resultText.innerHTML += `<div class="list-of-person-results">
    <input id="1" type="checkbox" class="material_checkbox">
    <p class="number-result" id="${index}">${index}</p>
    <p class="person-name-result">oleksandr</p>
    <p class="person-bill-result">49.00</p>
  </div>`;
  }
  return;
});

// if(billInputsValue < 0 && nameInputsText !== ""){ 
//  console.log("hoeedzjhkjedb");
// }


//create function for record many inputs data and add to array of objects?

// let dataPersons = [];

// function addPerson(dataPersonsToAdd) {
//   dataPersons.push(...dataPersonsToAdd);
//   return dataPersons;
// }


// console.log(addArtist(objects));
