import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import phonebook from './services/phonebook'

const notificationTypes = { SUCCESS: "SUCCESS", FAILURE: "FAILURE" }

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

  const displayTemporaryNotification = (message, notificationType) => {
    setMessage({
      message,
      notificationType: notificationType
    })
    delayClearMessage()
  }

  const delayClearMessage = () => {
    if (messageTimeout) {
      window.clearTimeout(messageTimeout)
    }

    setMessageTimeout(setTimeout(() => {
      setMessage(null)
      setMessageTimeout(null)
    }, 3500))
  }

  const submitPerson = event => {
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
      updatePerson(newPerson, foundPerson)
    } else {
      addPerson(newPerson)
    }
  }

  const addPerson = newPerson => {
    phonebook
      .create(newPerson)
      .then(person => {
        setPersons(persons.concat(person))

        displayTemporaryNotification(`Added ${newPerson.name}`, notificationTypes.SUCCESS)
      })
      .catch(error => {
        console.error('Failed to add person', error)
      })
    // BUG: Duplicate key can be created between two simulataneous app sessions, but failure isn't returned by promise.
    // The duplicate problem manifests only on page reload when we get the full list of people/numbers.
    // WONTFIX for now, because I'm pretty sure this can be taken care of when we move to express.js, away from the simple json-server.
  }

  const updatePerson = (newPerson, existingPerson) => {
    if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
      phonebook
        .update({ ...newPerson, id: existingPerson.id })
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))

          displayTemporaryNotification(`Updated ${updatedPerson.name}'s number`, notificationTypes.SUCCESS)
        })
        .catch(error => {
          console.error('Failed to update person', error)
        })
    }
  }

  const deletePerson = person => () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebook
        .remove(person)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id))

          displayTemporaryNotification(`Deleted ${deletedPerson.name}`, notificationTypes.SUCCESS)
        })
        .catch(error => {
          console.error('Failed to delete person', error)
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
        submit={submitPerson}
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App