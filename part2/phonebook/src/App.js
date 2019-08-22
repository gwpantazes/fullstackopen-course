import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-1234567' },
    { name: 'Gamma Bellas', phoneNumber: '1234567890' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const handleNameChange = event => setNewName(event.target.value)

  const handlePhoneNumberChange = event => setNewPhoneNumber(event.target.value)

  const addPerson = event => {
    event.preventDefault()

    const trimmedNewName = newName.trim()
    const trimmedPhoneNumber = newPhoneNumber.trim()

    if (trimmedNewName.length === 0) {
      alert('Name is empty.')
    } else if (trimmedPhoneNumber.length === 0) {
      alert('Phone number is empty')
    } else if (persons.find(person => person.name === trimmedNewName)) {
      alert(`${trimmedNewName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({
        name: trimmedNewName,
        phoneNumber: trimmedPhoneNumber
      }))
    }
  }

  const phoneNumbers = persons.map(person => <Person
    key={person.name}
    name={person.name}
    phoneNumber={person.phoneNumber}
  />)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {phoneNumbers}
      </div>
    </div>
  )
}

export default App