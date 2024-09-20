// Sets and Maps
const languages = [
    'English',
    'Yoruba',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
    'Hausa',
]

//a new set is created from the languages array. 
// set automatically removes any duplicate values of arrays
  const setOfLanguages = new Set(languages);

  console.log(setOfLanguages); //the duplicates will be removed in the output

const counts = []
const count = {}

for (const l of setOfLanguages) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang)
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts);

// Adding an element to a set
const companies = new Set();
console.log(companies.size);

companies.add('Nestle');
companies.add('Coca-Cola');
companies.add('Kelloggs');
companies.add('PepsiCo');
companies.add('CWay');

console.log(companies.size); 
console.log(companies);

// Deleting an element a set
console.log(companies.delete('CWay'));
console.log(companies.size);

// Checking an element in the set
console.log(companies.has('Apple'));
console.log(companies.has('Nestle'));

// Clearing the set
companies.clear()
console.log(companies);

// Union of sets
let a = [4, 5, 8, 9];
let b = [3, 4, 5, 7];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);
// Intersection of sets
let newc = a.filter((num) => B.has(num));
let newC = new Set(newc);
console.log(newC);

// Difference of sets
// let c = a.filter((num) => !B.has(num))

// creating map from array
// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
// ]
// const map = new Map(countries);
// console.log(map);
// console.log(map.size);

// // 
// const countriesMap = new Map()
// console.log(countriesMap.size);
// countriesMap.set('Finland', 'Helsinki');
// countriesMap.set('Sweden', 'Stockholm');
// countriesMap.set('Norway', 'Oslo');
// console.log(countriesMap);
// console.log(countriesMap.size);
// // checking key in array
// console.log(countriesMap.has('Finland'));

const Countries = [
    {country: 'Nigeria', languages: ['English', 'Hausa', 'Yoruba', 'Igbo']},
    {country: 'United States', languages: ['English', 'Spanish']},    
    {country: 'Germany', languages: ['German']},
    {country: 'France', languages: ['French']},
    {country: 'China', languages: ['Mandarin']},
    {country: 'India', languages: ['Hindi', 'English']},
    {country: 'Brazil', languages: ['Portuguese']},
    {country: 'Russia', languages: ['Russian']},
    {country: 'Canada', languages: ['English', 'French']},
    {country: 'South Africa', languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English']},
    
];
console.log(Countries);
const CountriesSet = new Set(Countries);
console.log(CountriesSet);

const languageCounts = []
const Count = {}

// for (const 1 of CountriesSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     console.log(filteredLang) // ["English", "English", "English"]
//     counts.push({ lang: l, count: filteredLang.length })
// }
// console.log(counts)

// const mostSpokenLanguages = (arr, languageSpoken) => {
//     const languageCount = {};

//     arr.forEach(country => {
//       country.languages.forEach(language => {
//         if (languageCount[language]) {
//           languageCount[language]++;
//         } else {
//           languageCount[language] = 1;
//         }
//       });
//     });
  
//     // to convert the language count object to an array of { language, count } objects
//     const languageArray = Object.entries(languageCount).map(([language, count]) => ({
//       language,
//       count
//     }));
  
//     // to sort the array by count in descending order
//     const sortedLanguages = languageArray.sort((a, b) => b.count - a.count);
  
//     if (languageSpoken > sortedLanguages.length) n = sortedLanguages.length;
  
//     // Return the top n languages
//     return sortedLanguages.slice(0, languageSpoken);
//   };
//   console.log(mostSpokenLanguages(Countries, 10));
  