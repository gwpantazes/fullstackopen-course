import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Weather from './Weather'

const Country = ({ country }) => {
    const [weather, setWeather] = useState(undefined)

    useEffect(() => {
        axios
            .get(`https://api.apixu.com/v1/current.json?key=31015808c30743028c1163200190509&q=${country.capital}`)
            .then(response => setWeather(response.data))
    }, [country])

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
            <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                title={`Flag of ${country.name}`}
                width="60%"
                border="5"
            />
            <Weather city={country.capital} weather={weather} />
        </div>
    )
}

export default Country