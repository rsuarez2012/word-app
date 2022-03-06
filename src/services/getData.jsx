export const getData = async () => {

  const base_url = "https://restcountries.com/v3.1/all";
  const resp = await fetch( base_url );
  const data = await resp.json();
  let getCountriesGrid = data.map( country => {
    return {
      id: country.altSpellings[0],
      country: country.name.common,
      flag: country.flags.png,
      population: country.population,
      region: country.region,
      capital: country.capital,
      name_official: country.name.official
    }
  });
  return getCountriesGrid;
}