const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Add 'Meat' at the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
// Remove 'Honey' if allergic
const allergicToHoney = true;
if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
    }
}
// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);


const countries = ['USA', 'Ireland', 'Germany', 'Australia', 'Japan'];

// Check if 'Ethiopia' exists in the array
if (countries.includes('Ethiopia')) {
    console.log('Ethiopia');
} else {
    // If 'Ethiopia' is not found, add it to the array
    countries.push('Ethiopia');
}
console.log(countries);

//remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');

// to covert string to array
let words = newText.split(' ');

console.log(words);
console.log(words.length);

// Concatenate the two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = (frontEnd.concat(backEnd));
console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort()
console.log('Sorted Ages:', ages);

//the minimum and maximum age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log('Minimum Age:', minAge);
console.log('Maximum Age:', maxAge);

//the median age
const middleIndex = Math.floor(ages.length / 2);
let medianAge;

if (ages.length % 2 === 0) {
    // If even number of items, median is the average of the two middle numbers
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    // If odd number of items, median is the middle number
    medianAge = ages[middleIndex];
}

console.log('Median Age:', medianAge);

// the average age
const sumOfAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumOfAges / ages.length;

console.log('Average Age:', averageAge);

//the range of ages
const ageRange = maxAge - minAge;

console.log('Age Range:', ageRange);
