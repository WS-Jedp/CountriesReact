import React from 'react'

// Styles
import './styles/Filter.css';

const Filter = (props) => {
  return (
    <form id="form__countries" className="formCountries">
      <input type="text" id="filterCountries" placeholder="Search for a country..." onChange={props.onChange} />
        <select onChange={props.onChangeContinent}>
            <option value="">All</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
        </select>
    </form>
  )
}

export default Filter
