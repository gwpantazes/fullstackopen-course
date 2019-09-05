import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const handleNameFilterChange = event => setNameFilter(event.target.value)

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const addPerson = event => {
    event.preventDefault()

    const trimmedNewName = newName.trim()
    const trimmedNumber = newNumber.trim()

    if (trimmedNewName.length === 0) {
      alert('Name is empty.')
    } else if (trimmedNumber.length === 0) {
      alert('Phone number is empty')
    } else if (persons.find(person => person.name === trimmedNewName)) {
      alert(`${trimmedNewName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({
        name: trimmedNewName,
        number: trimmedNumber
      }))
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} onChange={handleNameFilterChange} />
      <PersonForm
        addPerson={addPerson}
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App