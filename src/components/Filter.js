import React from 'react';

const Filter = ({searchInput, setSearchInput, setCountries, countries, setFiltered}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Search countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }
  return (
    <div className='filter'>
      <form className ="control" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a Country"
          onChange={(e) => searchCountries(e.target.value)}
        />
      </form>

      <div className='region-filter'>
      <select
        name="select"
        id="select"
        className='select'
        placeholder='Filter by region'
      >
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )

};

export default Filter;
