const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
   const countries =data.map(country=>country.name);
    // displayCountries(countries);

   document.querySelector('.searchBtn').addEventListener('click',() => {
      const search = document.querySelector('#searchInput').value.toLowerCase();
      const result = document.querySelector('.result');
      result.innerHTML = '';

      const filteredCountries = countries.filter(country=>country.toLowerCase().includes(search));

      if (filteredCountries.length > 0) {
        filteredCountries.forEach(country => {
          const p = document.createElement('p');
          p.textContent = country;
          result.appendChild(p);
        });
      } else{
        result.innerHTML = '<p> No countries found </p>';
      }
   });
  })
  .catch(error =>{
    console.error(error);
    const result = document.querySelector('.result');
  });
   