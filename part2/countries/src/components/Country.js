import React from 'react'

const Country = ({ country }) => {

    const renderListOfCountryLanguages = () => country.languages
        .map(language => <li key={language.name}>{language.name} ({language.nativeName})</li>)

    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {renderListOfCountryLanguages()}
            </ul>
            <img src={country.flag} alt="Flag of {country}" width="60%"/>
        </div>
    )
}

export default Country