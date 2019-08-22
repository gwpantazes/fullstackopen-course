import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Gamma Bellas', number: '1234567890' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [nameFilter, setNameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const numbers = persons
    .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .map(person => <Person
      key={person.name}
      name={person.name}
      number={person.number}
    />)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter by name: <input value={nameFilter} onChange={handleNameFilterChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {numbers}
      </div>
    </div>
  )
}

export default App