import React, { useState, useEffect } from 'react';

// url for country data
const url = 'https://restcountries.com/v2/all';

const CountriesList = () => {
  const [countries, setCountries]  = useState([]);

  // fetching the country list from the external api
  useEffect(() => {
    const fetchCountries = async() => {
      const res = await fetch(url);
      const countries = await res.json();
      setCountries(countries)
      console.log(countries)
    }
    fetchCountries()
  },[])

  return (
    <>
      <section className='grid'>
        {countries.map((country) => {
          const { name, population, region, capital, flag, numericCode } = country
          return (
            <div key={numericCode}>
              <img src={flag} alt={name} />
              <div className='info'>
                <h3>{name}</h3>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
              </div>
            </div>
          )
        })}
      </section>
    </>
  );
};

export default CountriesList;