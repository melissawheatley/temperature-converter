"use strict";

console.log("converter js says hello");

var input = document.getElementById("inputTemp");
// console.log("input", input);
let clear = document.getElementById("clear");
var output = document.getElementById("convertedTemp");
let button = document.getElementById("");

clear.addEventListener("click", clearDiv);
input.addEventListener("click", converter)   

function clearDiv() {
    input.value= " ";
}


// Create a button that, when clicked, displays the converted temperature.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

function toCelsius () {

}

function toFahrenheit () {

}

// // Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.