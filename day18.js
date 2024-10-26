const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    // Exercise 1: Read the countries API using fetch and print the name of country, 
    // capital, languages, population and area.
    countries.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area} sq km`);
      console.log('--------------------------');
    });

    // Exercise 2: Find the 10 largest countries by area
    const largestCountries = countries
      .sort((a, b) => b.area - a.area) 
      .slice(0, 10); 

    console.log('The 10 largest countries by area:');
    largestCountries.forEach(country => {
      console.log(`${country.name} - Area: ${country.area} sq km`);
    });

    // Exercise 3: Count total number of unique languages in the world used as official languages
    const languagesSet = new Set(); 
    countries.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language.name);
      });
    });
    console.log(`\nTotal number of official languages in the world: ${languagesSet.size}`);
  })
  .catch(error => console.error('Error fetching the countries data:', error));

// cat API
  const catsAPI = 'https://api.thecatapi.com/v1/breeds';

  fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
      // Create a variable to store the total weight and count of breeds
      let totalWeight = 0;
      let breedCount = 0;
  
      // Iterate over each cat breed
      data.forEach(breed => {
        // Extract the weight in metric units, which is provided as a string like "3 - 5"
        const weightMetric = breed.weight.metric;
        const [minWeight, maxWeight] = weightMetric.split(' - ').map(Number); // Convert the weight range to numbers
        const avgWeight = (minWeight + maxWeight) / 2; // Calculate the average weight for this breed
  
        totalWeight += avgWeight; // Add the average weight to the total
        breedCount++; // Increment the breed count
      });
  
      // Calculate the overall average weight
      const averageWeight = totalWeight / breedCount;
  
      console.log(`The average weight of cats is ${averageWeight.toFixed(2)} kg`);
    })
    .catch(error => console.error('Error fetching the cat breeds data:', error));
  