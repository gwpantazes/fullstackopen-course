import React from 'react'

const CountryListItem = ({ country, onShowCountry }) => {

    return (
        <li>
            {country.name} &nbsp;
            <button onClick={() => onShowCountry(country)}>Show</button>
        </li>
    )
}

export default CountryListItem