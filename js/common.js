'use strict';

const billInput = document.querySelector('.input.bill'),
    tipInput = document.querySelector('.custom.input'),
    personInput = document.querySelector('.people'),
    tipPerPerson = document.querySelector('.price-amount'),    
    totalPerPerson = document.querySelector('.price-total'),
    btnsWithProcent = document.querySelectorAll('#btn'),
    label = document.querySelector('.label-CBZ'),
    resetButton = document.querySelector('.btn-reset');

// tipPerPerson.textContent = "$0.00";
// totalPerPerson.innerHTML = "$0.00";
// billInput.value = "500";
tipInput.value = "";
personInput.value = "";


// Calculate when presed one of tne buttons
btnsWithProcent.forEach((btn) => {
  btn.addEventListener("click", calkBtnPress);
});

function calkBtnPress(e) {
  let tipvalue = e.target.innerText;
  tipvalue = tipvalue.substr(0, tipvalue.length - 1);

  if (billInput.value === "") billInput.value = 1;
  if (personInput.value === "") personInput.value = 1;
  
  calculateTip(
    parseFloat(billInput.value),
    parseInt(tipvalue),
    parseInt(personInput.value)
    );
}

//Calculate Tip When User Give Custom Tip Percentage Input
tipInput.addEventListener("input", calkTipInput);
function calkTipInput(e) {
  if (billInput.value === "") {
      resetEverything();
      return;
  }
  if (personInput.value === "") personInput.value = 1;

  calculateTip(
      parseFloat(billInput.value),
      parseFloat(e.target.value),
      parseInt(personInput.value)
  );
}

// Calculation function
function calculateTip(billInputs, tipPercentages, personInputs) {
  let tipAmount = ((billInputs / 100) * tipPercentages) / personInputs;
  let tip = Math.floor(tipAmount).toFixed(2);
  
  let totalAmount = tipAmount + (billInputs / personInputs);
  totalAmount = totalAmount.toFixed(2);
  
  tipPerPerson.innerHTML = `$${tip}`;
  totalPerPerson.innerHTML = `$${totalAmount}`;
}

// Reset Everything
resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  tipPerPerson.innerHTML = "$0.0";
  totalPerPerson.innerHTML = "$0.0";
  billInput.value = "";
  tipInput.value = "";
  personInput.value = "";
  personInput.classList.remove('red-input');
  label.classList.add('hidden');
  btnsWithProcent.forEach((btn) => {
        btn.classList.remove('btn-active');            
    });
};

// Add "Can`t be zero" and red border
// personInput.addEventListener('input', () => {
//     if( personInput.value > 0 || personInput.value === "") {
//         personInput.classList.remove('red-input');
//         label.classList.add('hidden');
//     } else {
//         personInput.classList.add('red-input');
//         label.classList.remove('hidden');
//     }
// });
