// countries array
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

// Reverse the countries array and capitalize each country
const reversedAndCapitalizedCountries = countries.reverse().map(country => country.toUpperCase());

console.log(reversedAndCapitalizedCountries);