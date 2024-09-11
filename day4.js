// JavaScript Conditionals
num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}

num = 7;
if (num % 2 == 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

// if else if else
let weather = 'sunny';
if (weather === 'rainy') {
  console.log('You need a rain coat.');
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.');
} else {
  console.log('No need for rain coat.');
}

// num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

// age = prompt('Enter your age');
// if (age >= 18){
//     console.log('You are old enough to drive');    
// }   else if (age < 18){
//     console.log('wait until you are 18 or above');
// }

let pWeight = 157; 
let nWeight = 453; 

if (pWeight > nWeight) {
    console.log('pWeight is greater than nWeight');
} else {
    console.log('pWeight is less than nWeight');
}
//To determine season with user's input
month = prompt('Enter month');
if ('september', 'october', 'november'){
        console.log('The season is Autumn');
} else if ('december', 'january', 'february'){
        console.log('The season is Winter.');
} else if ('march', 'april', 'may') {
        console.log('The season is Spring.');
} else if ('june', 'july', 'august') {
        console.log('The season is Summer.');
} else {
        console.log('Invalid month input.');
}

let A= 80-100;
let B= 70-89;
let C= 60-69;
let D= 50-59;
let F= 0-49;

score= prompt('Enter our score');
if (score === A){
        console.log('grade A');
} else if (score === B){
    console.log('grade B');
} (score === C)
    console.log('grade C');

// a program which tells the number of days in a month
let month = prompt('Enter month').toLowerCase();

if (['september', 'april', 'june', 'november']){
        console.log(month + ' has 31 days');
}
else if ('february'){
        console.log(month + ' has 28 days.');
} else if (['january','march', 'may', 'july', 'august', 'october', 'december']){
        console.log(month + ' has 30 days');
} else {
        console.log('Invalid month input.');
}