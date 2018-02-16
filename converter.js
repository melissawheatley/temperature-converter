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
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

function toFahrenheit () {
    var fahrTemp = (input.value * 1.8) + 32;
    console.log(fahrTemp);
    output.innerHTML = `${fahrTemp.toFixed()} &deg; F`
}

function toCelsius () {
    var celsiusTemp = (input.value - 32) * (5/9);
    console.log(celsiusTemp);
    output.innerHTML = `<p>${input.value}&deg; F converts to: </p><h2> ${celsiusTemp.toFixed()} &deg; C</h2>`
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


// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.