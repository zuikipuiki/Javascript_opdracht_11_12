// 1. BTW opdracht 

let calcTax = function (basePrice, percentage) {
 let btwPrice = (basePrice * percentage);
 console.log("The BTW your are paying is ..")
return Math.round(btwPrice);
}

console.log(calcTax(1000, 0.09));

let withTax = function (basePrice, percentage) { 
let btwPrice = (calcTax (basePrice, percentage));
let fullPrice = (basePrice + btwPrice);
console.log("The full price your are paying is ..")
return fullPrice;
}

console.log(withTax(1000, 0.09));


// 2. BTW opdracht

// 9% BTW omzetten in 0.09 
let firstPrice = function (price) {
  return firstPrice;

}
console.log(firstPrice(1090));

let calcBtw = function (percentage) {
let btwPercent = (percentage / 100);
return btwPercent;
}
console.log(calcBtw(9));

// Coficieent berekenen van 0.09 naar 1.09
let btwCoeff = function (percentage) {
 let coefficient = (calcBtw(percentage) + 1);
 return coefficient;
}

console.log(btwCoeff(9));

// Hoeveel btw betaal je van je product

let onlyBtw = function (percentage) { 
let countBtw = (firstPrice - firstPrice / btwCoeff);
return Math.round(countBtw);
}

console.log(onlyBtw((1090, 9)));
// NAN?!