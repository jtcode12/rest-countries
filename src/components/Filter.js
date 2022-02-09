import React from 'react';

const Filter = () => {
  return (
    <div className='filter'>
      <form className ="control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a Country"
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
