//string concatenation
let userName= 'Mide codes';
let State= 'Abuja';
let herAge = 19;
let PersonInfoOne = userName + '. I am ' + herAge +'. I live in ' + State;
console.log(PersonInfoOne);

// Different string methods
let challenge='30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.substring(5,7));
console.log(challenge.split(' '));
console.log(challenge.replace('JavaScript', 'Python'));
let lastIndex=challenge.length -2;
console.log(challenge.charAt(lastIndex));

// Check if typeof '10' is exactly equal to 10
let typeOfString = typeof '10';
let number = 10;

console.log(typeOfString === number);

// Convert '10' to a number and check equality
let convertedNumber = Number('10');

console.log(convertedNumber === number);

let sentence = "I hope this course is not full of jargon.";

// Check if the word 'jargon' is in the sentence
let containsJargon = sentence.includes('jargon');

console.log(containsJargon); 

// Changing Data types
/* String to Int, String to float, Float to Int*/
// change string number to integer
 
let num ='20';
 let numInt = parseInt(num);
 console.log(numInt);
