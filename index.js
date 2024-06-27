/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281 
const literToGallon = 0.264
const kilogramToPound = 2.204

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    lengthEl.textContent = lengthConversion()
    volumeEl.textContent = volumeConversion()
    massEl.textContent = massElConversion()
})

function lengthConversion(){
    lengthOutput =
    `
    ${inputEl.value} meters = ${(inputEl.value * meterToFeet).toFixed(3)} feet | 
    ${inputEl.value} feet = ${(inputEl.value / meterToFeet).toFixed(3)} meters
    ` 
    return lengthOutput
}
   
function volumeConversion() { 
    volumeOutput =
    `
    ${inputEl.value} liters = ${(inputEl.value * literToGallon).toFixed(3)} gallon | 
    ${inputEl.value} gallon = ${(inputEl.value / literToGallon).toFixed(3)} liters
    ` 
    return volumeOutput
}    

function massElConversion() { 
    massOutput =
    `
    ${inputEl.value} kilos = ${(inputEl.value * kilogramToPound).toFixed(3)} pounds | 
    ${inputEl.value} pounds = ${(inputEl.value / kilogramToPound).toFixed(3)} kilos
    `
    return massOutput
}

////////////////////////////////////////////////////////////////////////////////////
let inputEl2 = document.getElementById("input-el2")
const convertBtn2 = document.getElementById("convert-btn2")
const lengthEl2 = document.getElementById("length-el2")
const volumeEl2 = document.getElementById("volume-el2")
const massEl2 = document.getElementById("mass-el2")

convertBtn2.addEventListener("click", function(){
    lengthEl2.textContent = lengthConversion()
    volumeEl2.textContent = volumeConversion()
    massEl2.textContent = massElConversion()
})
