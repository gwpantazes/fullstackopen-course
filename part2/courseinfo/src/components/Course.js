import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {

    const total = course.parts
        .map(part => part.exercises)
        .reduce((a, b) => a + b)

    return <section>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total total={total} />
    </section>
}

export default Course