import React, { useState, useEffect } from 'react'
import Country from './Country'
import CountryList from './CountryList';

const Result = ({ countries }) => {
    const [showCountry, setShowCountry] = useState(undefined)

    useEffect(() => setShowCountry(undefined), [countries])

    const onShowCountry = country => setShowCountry(country)

    if (countries.length > 10) {
        return <div>Too many matches, specify another filter.</div>
    } else if (countries.length > 1) {
        return showCountry
            ? <>
                <CountryList countries={countries} onShowCountry={onShowCountry} />
                <Country country={showCountry} />
            </>
            : <CountryList countries={countries} onShowCountry={onShowCountry} />
    } else if (countries.length === 1) {
        return <Country country={countries[0]} />
    } else {
        return <div></div>
    }
}

export default Result