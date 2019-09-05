import React from 'react'
import CountryListItem from './CountryListItem'

const CountryList = ({ countries, onShowCountry }) => {

    return (
        <div>
            <ul>
                {countries.map(country => (
                    <CountryListItem
                        key={country.name}
                        country={country}
                        onShowCountry={onShowCountry}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CountryList