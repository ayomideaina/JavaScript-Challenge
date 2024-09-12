// Setting Interval using a setInterval function
function sayHello() {
    console.log('Hello')
  }
  setInterval(sayHello, 1000)

//Setting a time using a setTimeout
  function sayHi() {
    console.log('Hi')
  }
  setTimeout(sayHi, 1000) 


const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland','Japan', 'Kenya'   
];
const countryData = countries.map(country => [
  country, 
  country.slice(0, 3).toUpperCase(),
  country.length
]);
  
console.log(countryData);
// Extract all the countries contain the word 'land' from the countries array and print it as array
let countryWithLand = countries.filter(country => country.includes('land'));
if (countryWithLand.length > 0) {
  console.log(countryWithLand);
} else {
  let countryWithoutLand = countries.filter(country => !country.includes('land'));
  console.log(countryWithoutLand);
}
// Extract all the countries containing only five characters from the countries array and print it as array
let fiveCharacterCountries = countries.filter(country => country.length === 5);
  console.log(fiveCharacterCountries);

countries.forEach(countries => {
    console.log(countries);
});

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters);

const result = countries.find((countries) => countries.length > 7)
console.log(result);

// find: Return the first element which satisfies the condition
// Task: get user that get score > 80 using find()
const scores = [
  { name: 'Happiness', score: 80 },
  { name: 'Lizzy', score: 50 },
  { name: 'Martins', score: 85 },
  { name: 'Rejoice', score: 100 },
  { name: 'Best', score: 95},
]

const score = scores.find((user) => user.score > 80)
console.log(score);

// to get all users with scores above 80, use the filter method
const highScorers = scores.filter(user => user.score > 80);
console.log(highScorers);

// use of sort:arranges the array elements either ascending or descending order.
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort());


const values = [9.81, 3.14, 100, 37]
values.sort(function (a, b) {
  return a - b
})

console.log(values) // ascending order

values.sort(function (a, b) {
  return b - a
})
console.log(values) //descending order


const numbers = [1, 5, 7, 4, 3]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
// Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);