export const getCountry = async (countryId) => {
  // console.log(countryId)

  const base_url = `https://restcountries.com/v3.1/name/${countryId}`;
  const resp = await fetch( base_url );
  const data = await resp.json();
  let getCountryGrid = data.map( country => {
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
  console.log(getCountryGrid)
  // return getCountryGrid;
  return data;
}