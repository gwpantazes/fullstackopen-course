import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)
  const [messageTimeout, setMessageTimeout] = useState(null)

  useEffect(() => {
    phonebook
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const handleNameFilterChange = event => setNameFilter(event.target.value)

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const delayClearMessage = () => {
    if(messageTimeout) {
      window.clearTimeout(messageTimeout)
    }

    setMessageTimeout(setTimeout(() => {
      setMessage(null)
      setMessageTimeout(null)
    }, 3500))
  }

  const addPerson = event => {
    event.preventDefault()

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim()
    }

    // Error checking
    if (newPerson.name.length === 0) {
      alert('Name is empty.')
      return
    } else if (newPerson.number.length === 0) {
      alert('Phone number is empty')
      return
    } 
    
    const foundPerson = persons.find(person => person.name === newPerson.name)
    if (foundPerson) {
      if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
        phonebook
          .update({ ...newPerson, id: foundPerson.id })
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))

            setMessage(`Updated ${updatedPerson.name}'s number`)
            delayClearMessage()
          })
      }
    } else {
      phonebook
        .create(newPerson)
        .then(person => {
          setPersons(persons.concat(person))
          
          setMessage(`Added ${newPerson.name}`)
          delayClearMessage()
        })
    }
  }

  const deletePerson = person => () => {
    if(window.confirm()) {
      phonebook
        .remove(person)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id))

          setMessage(`Deleted ${deletedPerson.name}`)
          delayClearMessage()
        })
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={nameFilter} onChange={handleNameFilterChange} />
      <PersonForm
        addPerson={addPerson}
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App