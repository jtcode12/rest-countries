import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

// url for country data
const url = 'https://restcountries.com/v2/all';

const CountriesList = () => {
  const [countries, setCountries]  = useState([]);
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // fetching the country list from the external api
  useEffect(() => {
    const fetchCountries = async() => {
      const res = await fetch(url);
      const countries = await res.json();
      setCountries(countries)
      setIsLoading(false)
    }
    fetchCountries();
  },[])

  return (
    <>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : searchInput.length > 1 ? (
        <section className="grid">
          {filtered.map((country) => {
            const { numericCode, name, flag, population, region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <div>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="info">
                    <h4 >
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </div>
              </Link>
            )
          })}
        </section>
      ) : (
      <section className='grid'>
        {countries.map((country) => {
          const { name, population, region, capital, flag, numericCode } = country
          return (
            <div key={numericCode}>
              <img src={flag} alt={name} />
              <div className='info'>
                <h3><span>{name}</span></h3>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
                <Link to={`/countries/${name}`} className='link-btn'>Learn More</Link>
              </div>
            </div>
          )
        })}
      </section>
      )}
    </>
  );
};

export default CountriesList;
