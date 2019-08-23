import React from 'react'
import Person from './Person'

const Persons = ({persons}) => {

    const mappedPersons = persons.map(person => <Person
        key={person.name}
        name={person.name}
        number={person.number}
      />)

    return <div>{mappedPersons}</div>
}

export default Persons