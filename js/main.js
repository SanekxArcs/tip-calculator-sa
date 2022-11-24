'use strict';

const billInput = document.querySelector('.input-bill'),
    tipInput = document.querySelector('.custom-input'),
    personInput = document.querySelector('.people'),
    tipPerPerson = document.querySelector('.price-amount'),    
    totalPerPerson = document.querySelector('.price-total'),
    btnsWithProcent = document.querySelectorAll('#btn'),
    label = document.querySelector('.label-CBZ'),
    resetButton = document.querySelector('.btn-reset');

    
     calculateTip(
        parseFloat(billInput.value),
        parseFloat(e.target.value),
        parseInt(numberOfPeople.value)
      );
      
      function calculateTip(billInput, btnsWithProcent, personInput) {
        let tipAmount = (billInput * (btnsWithProcent / 100)) / personInput;
        let tip = Math.floor(tipAmount * 100) / 100;
        tip = tip.toFixed(2);
      
        let totalAmount = (tipAmount * personInput + billInput) / personInput;
        totalAmount = totalAmount.toFixed(2);
      
        billTipAmount.innerHTML = `$${tip}`;
        billTotalPerPerson.innerHTML = `$${totalAmount}`;
      }

      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          let tipvalue = e.target.innerText;
          tipvalue = tipvalue.substr(0, tipvalue.length - 1);
      
          if (billAmount.value === "") return;
          if (numberOfPeople.value === "") numberOfPeople.value = 1;
      
          calculateTip(
            parseFloat(billAmount.value),
            parseInt(tipvalue),
            parseInt(numberOfPeople.value)
          );
        });
      });
      
      //Calculate Tip When User Give Custom Tip Percentage Input
      customTipPercentage.addEventListener("blur", (e) => {
        if (billAmount.value === "") {
          resetEverything();
          return;
        }
        if (numberOfPeople.value === "") numberOfPeople.value = 1;
      
        calculateTip(
          parseFloat(billAmount.value),
          parseFloat(e.target.value),
          parseInt(numberOfPeople.value)
        );
      });
      



    //add class active to the btn
    btnsWithProcent.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('btn-active');            
        });
    });

    //add Cant be zero adn red border
    personInput.addEventListener('input', () => {
        if( personInput.value > 0) {
            personInput.classList.remove('red-input');
            label.classList.add('hidden');
        } else {
            personInput.classList.add('red-input');
            label.classList.remove('hidden');
        }
    });

      //Reset Everything
      resetButton.addEventListener("click", resetEverything);

      function resetEverything() {
        tipPerPerson.innerHTML = "$0.00";
        totalPerPerson.innerHTML = "$0.00";
        billInput.value = "";
        personInput.value = "";
        tipInput.value = "";
      }