// AGE

let checkAge = function (age) {
 if  (age >= 18) {
  console.log("Checking the age ...");
 return true;
 } 
 console.log("Checking the age ...");
 return false;
}

console.log(checkAge(19));

// Calls previous function to check if we have an adult age

let checkAdult = function (age) {
 if (checkAge = true) {
  console.log("Checking the age and greeting...");
  return "Hello there";

} else 
console.log("Checking the age and greeting...");
return "Hey Kiddo!"
} 

console.log(checkAdult(checkAge(15)));

// Ergens zit er een fout!