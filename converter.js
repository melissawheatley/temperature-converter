"use strict";

console.log("converter js says hello");

var input = document.getElementById("inputTemp");
console.log("input", input);
let clear = document.getElementById("clear");
var output = document.getElementById("convertedTemp");
let button = document.getElementById("convertBtn");
let celsius = document.getElementById("celsiusCheck");
let fahrenheit = document.getElementById("fahrenheitCheck")


// EVENT LISTENERS 
clear.addEventListener("click", clearDiv);
button.addEventListener("click", determineConverter);  
input.addEventListener("keydown", pressEnter);

// FUNCTIONS
function clearDiv() {
    input.value= " ";
    output.innerHTML = " ";
}

function pressEnter(clickEvent){
    if(clickEvent.keyCode === 13){
        determineConverter(clickEvent);
    }
}

function toFahrenheit () {
    var fahrTemp = (input.value * 1.8) + 32;
    console.log(fahrTemp);
    if(fahrTemp <= 32){
        output.innerHTML = `<hr /><p>${input.value}&deg; C converts to: </p><h2 class="cold">${fahrTemp.toFixed()} &deg; F</h2>`
    }else if(fahrTemp >= 90){
        output.innerHTML = `<hr /><p>${input.value}&deg; C converts to: </p><h2 class="hot">${fahrTemp.toFixed()} &deg; F</h2>`
    }else{
        output.innerHTML = `<hr /><p>${input.value}&deg; C converts to: </p><h2 class="green">${fahrTemp.toFixed()} &deg; F</h2>`}
}

function toCelsius () {
    var celsiusTemp = (input.value - 32) * (5/9);
    console.log(celsiusTemp);
    if(celsiusTemp <= 0){
        output.innerHTML = `<hr /><p>${input.value}&deg; F converts to: </p><h2 class="cold">${celsiusTemp.toFixed()} &deg; C</h2>`
    }else if(celsiusTemp >= 32){
        output.innerHTML = `<hr /><p>${input.value}&deg; F converts to: </p><h2 class="hot">${celsiusTemp.toFixed()} &deg; C</h2>`
    }else{
        output.innerHTML = `<hr /><p>${input.value}&deg; F converts to: </p><h2 class="green">${celsiusTemp.toFixed()} &deg; C</h2>`}
}

function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  if(celsius.checked === true){
    toCelsius();
  }else if(fahrenheit.checked === true){
    toFahrenheit();
  }else{
    output.innerHTML = "error";    
  }
}
