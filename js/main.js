// ask the user how much km want to travel
const km = Number(prompt("Quanti kilometri vuoi percorrere?"));
// ask the user age
const age = Number(prompt("Quanti anni hai?"));

// calculate travel price
const pricePerKm = km * 0.21;
const discountForTeens = 0.2;
const discountForElders = 0.4;
let travelPrice = pricePerKm;

if (age < 18) {
  travelPrice -= travelPrice * discountForTeens;
} else if (age > 65) {
  travelPrice -= travelPrice * discountForElders;
}

console.log(travelPrice.toFixed(2));
