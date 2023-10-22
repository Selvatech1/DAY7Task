// Fetch data from the REST API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Now you have the data as an array of country objects

    // Task 1: Get all countries from Asia
    const asiaCountries = data.filter(country => country.region === "Asia");
    console.log("Asia Countries:", asiaCountries);

    // Task 2: Get countries with a population of less than 2 lakhs
    const lowPopulationCountries = data.filter(country => country.population < 200000);
    console.log("Countries with Low Population:", lowPopulationCountries);

    // Task 3: Print name, capital, and flag of all countries
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.svg);
    });

    // Task 4: Calculate the total population of countries
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log("Total Population:", totalPopulation);

    // Task 5: Find countries that use US Dollars as currency
    const usDollarCountries = data.filter(country => country.currencies.USD);
    console.log("Countries using US Dollars:", usDollarCountries);
  })
  .catch(error => console.error("Error fetching data:", error));
