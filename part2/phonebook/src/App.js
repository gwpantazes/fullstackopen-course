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
      type: notificationType
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

    const person = {
      name: newName.trim(),
      number: newNumber.trim()
    }

    // Error checking
    if (person.name.length === 0) {
      alert('Name is empty.')
      return
    } else if (person.number.length === 0) {
      alert('Phone number is empty')
      return
    }

    const foundPerson = persons.find(p => p.name === person.name)
    if (foundPerson) {
      updatePerson(person, foundPerson)
    } else {
      addPerson(person)
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
        // BUG: This catch block pretty much can't be reached, because of how the bug occurs between sessions.
        // Duplicate key can be created between two simulataneous app sessions, but failure isn't returned by promise.
        // The duplicate problem manifests only on page reload when we get the full list of people/numbers.
        // WONTFIX for now, because I'm pretty sure this can be taken care of when we move to express.js, away from the simple json-server.
        console.error('Failed to add person', error)
        displayTemporaryNotification(`Faled to create ${newPerson.name}`, notificationTypes.FAILURE)
      })
  }

  const updatePerson = (person, existingPerson) => {
    if (window.confirm(`${person.name} is already added to the phonebook, replace the old number with a new one?`)) {
      phonebook
        .update({ ...person, id: existingPerson.id })
        .then(updatedPerson => {
          setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))

          displayTemporaryNotification(`Updated ${updatedPerson.name}'s number`, notificationTypes.SUCCESS)
        })
        .catch(error => {
          console.error('Failed to update person', person, existingPerson, error)
          displayTemporaryNotification(`Information of ${person.name} has already been removed from server`, notificationTypes.FAILURE)

          setPersons(persons.filter(p => p.id !== existingPerson.id))
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
          console.error('Failed to delete person, already removed from server', person, error)
          displayTemporaryNotification(`${person.name} has already been removed from server`, notificationTypes.FAILURE)

          setPersons(persons.filter(p => p.id !== person.id))
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