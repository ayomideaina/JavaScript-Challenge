// comparison operators
console.log(3>2);
console.log(3>2);
console.log(3>2);

// logical operators
const b= 4 > 3 && 10 < 12;
const c= 4 < 3 && 10 > 12;

const d= 4 > 3 || 10 > 12;
console.log(b);
console.log(c);
console.log(d);

// using Date object

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are 0-based, so add 1
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const secondsElapsed = Math.floor(now.getTime() / 1000);

console.log(`Year today: ${year}`);
console.log(`Month today: ${month}`);
console.log(`Date today: ${date}`);
console.log(`Day today: ${day}`);
console.log(`Hours now: ${hours}`);
console.log(`Minutes now: ${minutes}`);
console.log(`Seconds elapsed since January 1, 1970: ${secondsElapsed}`);

// to calculate the area of a triangle
let Base= 27;
let Height= 14; 
let AreaOfTriangle = 0.5 * Base * Height;
console.log(AreaOfTriangle);

const PI=3.14;
let radius= 150;
//calculate area of a circle
const AreaOfCircle= PI * radius * radius;
console.log(AreaOfCircle);

name = "Oluwasikemi"

if (name.length > 7){
    console.log("Your name is long.")
} else {
    console.log("Your name is short.");
}


function checkDrivingEligibility() {
    // Prompt the user for their birth year
    const birthYear = prompt("Please enter your birth year:");

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear);

    if (age >= 18) {
        console.log("You are eligible to drive.");
    } else {
        const yearsRemaining = 18 - age;
        console.log(`You need to wait ${yearsRemaining} more year(s) to be eligible to drive.`);
    }
}

window.onload = checkDrivingEligibility;


function calculatePay() {
    // Prompt the user for hours worked and rate per hour
    const hours = parseFloat(prompt("Enter the number of hours worked:"));
    const rate = parseFloat(prompt("Enter the rate per hour:"));


    // Calculate the pay
    const pay = hours * rate;

    alert("The total pay is: $" + pay.toFixed(2));
}
window.onload = calculatePay;
