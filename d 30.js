const url = 'https://restcountries.com/v2/all';
let countriesData = [];
let displayedCountries = [];

// Fetch countries data from the API
fetch(url)
    .then(response => response.json())
    .then(data => {
        countriesData = data;
        displayedCountries = data;
        displayCountries(data);
        document.getElementById('country-count').textContent = data.length;
    })
    .catch(error => console.log('Error fetching data:', error));

function displayCountries(countries) {
    const container = document.getElementById('countries-container');
    container.innerHTML = ''; // Clear previous content
    countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
            <img src="${country.flag}" alt="${country.name}" width="100px">
            <div class="country-info">
                <p><strong>${country.name}</strong></p>
                <p>Capital: ${country.capital || 'N/A'}</p>
                <p class="population" data-population="${country.population}">
                    Population: ${country.population.toLocaleString()} 
                    <span class="show-population">(Click for details)</span>
                </p>
            </div>
        `;
        container.appendChild(countryCard);
    });

    // To add click event listener for population details
    const populationElements = document.querySelectorAll('.population');
    populationElements.forEach(element => {
        element.addEventListener('click', function() {
            const population = this.dataset.population;
            alert(`Population: ${Number(population).toLocaleString()}`);
        });
    });
}

// Function to sort countries based on the selected key (name, capital, population)
function sortBy(key) {
    displayedCountries.sort((a, b) => {
        if (key === 'population') {
            return b.population - a.population;
        }
        return a[key].localeCompare(b[key]);
    });
    displayCountries(displayedCountries);
}

// To filter countries based on the search
function filterCountries() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredCountries = countriesData.filter(country =>
        country.name.toLowerCase().includes(searchTerm)
    );
    displayCountries(filteredCountries);
}

document.querySelector('.searchBtn').addEventListener('click', filterCountries);

document.getElementById('sort-name').addEventListener('click', () => sortBy('name'));
document.getElementById('sort-capital').addEventListener('click', () => sortBy('capital'));
document.getElementById('sort-population').addEventListener('click', () => sortBy('population'));
