// DAY 9 Excercises
const Countries = [
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 }
];
// to find the most populated countries
const mostPopulatedCountries = (arr, n) => {
   
    const sortedCountries = arr.sort((a, b) => b.population - a.population);
    
    return sortedCountries.slice(0, n);
};
console.log(mostPopulatedCountries(Countries, 10));
console.log(mostPopulatedCountries(Countries, 3));

countries = [
    { country: 'USA', languages: ['English', 'Spanish'] },
    { country: 'France', languages: ['French'] },
    { country: 'Germany', languages: ['German'] },
    { country: 'Brazil', languages: ['Portuguese'] },
    { country: 'China', languages: ['Chinese'] },
    { country: 'Russia', languages: ['Russian'] },
    { country: 'Nigeria', languages: ['Yoruba', 'Hausa', 'Igbo'] },
    { country: 'Swahili-speaking Country', languages: ['Swahili'] },
  ];

//  function to  get most spoken language
  const mostSpokenLanguages = (arr, languageSpoken) => {
    const languageCount = {};

    arr.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });
  
    // to convert the language count object to an array of { language, count } objects
    const languageArray = Object.entries(languageCount).map(([language, count]) => ({
      language,
      count
    }));
  
    // to sort the array by count in descending order
    const sortedLanguages = languageArray.sort((a, b) => b.count - a.count);
  
    if (languageSpoken > sortedLanguages.length) n = sortedLanguages.length;
  
    // Return the top n languages
    return sortedLanguages.slice(0, languageSpoken);
  };
  console.log(mostSpokenLanguages(countries, 10));
  