import React, { useState, useEffect } from 'react';
import Filter from './components/Filter'
import Result from './components/Result'

import axios from 'axios'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/countries")
      .then(response => setCountries(response.data))
  }, [])

  const onFilterChange = event => setFilter(event.target.value)

  const filterCountries = () => countries.filter(country => 
    country.name.toLowerCase().includes(filter.trim().toLowerCase()))

  return (
    <div>
      <h1>Countries</h1>
      <Filter filter={filter} onChange={onFilterChange} />
      <Result countries={filterCountries()} />
    </div>
  )
}

export default App;
