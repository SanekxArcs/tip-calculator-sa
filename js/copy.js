const billAmount = document.getElementsByClassName("input-bill");
const numberOfPeople = document.getElementsByClassName("people");
const customTipPercentage = document.getElementsByClassName("custom-input");
const billTipAmount = document.getElementsByClassName("price-amount");
const billTotalPerPerson = document.getElementsByClassName("price-total");
const resetButton = document.getElementsByClassName("btn-reset");
const buttons = document.querySelectorAll("#btn");

//Calculate Tip When Click On Tip Percentage Button
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

//Calculate Tip
function calculateTip(billAmount, tipPercentage, numberOfPeople) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  billTipAmount.innerHTML = `$${tip}`;
  billTotalPerPerson.innerHTML = `$${totalAmount}`;
}

//Reset Everything
resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  billTipAmount.innerHTML = "$0.00";
  billTotalPerPerson.innerHTML = "$0.00";
  billAmount.value = "1";
  numberOfPeople.value = "1";
  customTipPercentage.value = "1";
}
