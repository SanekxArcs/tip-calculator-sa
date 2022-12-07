'use strict';

const slideValue = document.querySelector(".sliderValue span");
const inputSlider = document.querySelector(".field input");

slideValue.style.display = 'none';

inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.style.display = '';
  if (value < 5){
    slideValue.textContent = value;
    slideValue.style.width = (10) + "%";
    slideValue.style.left = (10) + "%";
  }else {
    slideValue.textContent = value;
  slideValue.style.width = (value/2) + "%";
  slideValue.style.left = `calc(${(value*2) + "%"})`;
  }
  slideValue.classList.add("show");
});








