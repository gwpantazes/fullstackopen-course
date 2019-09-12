import React from 'react'
import Person from './Person'

const Persons = ({persons, deletePerson }) => {

    const mappedPersons = persons.map(person => <Person
        key={person.name}
        name={person.name}
        number={person.number}
        deletePerson={ deletePerson(person) }
      />)

    return <div>{mappedPersons}</div>
}

export default Persons