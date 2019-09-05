import React from 'react'
import Country from './Country'

const Result = ({ countries }) => {

    const renderCountryNames = () => countries.map(country => <li key={country.name}>{country.name}</li>)

    if (countries.length > 10) {
        return <div>Too many matches, specify another filter.</div>
    } else if (countries.length > 1) {
        return (
            <div>
                <ul>
                    {renderCountryNames()}
                </ul>
            </div>
        )
    } else if (countries.length === 1) {
        return <Country country={countries[0]} />
    } else {
        return <div></div>
    }
}

export default Result