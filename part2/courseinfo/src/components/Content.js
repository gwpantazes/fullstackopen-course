import React from 'react'
import Part from './Part'

const Content = ({ parts }) => (
    <>
        {parts.map(part => <Part
            key={part.id}
            part={part.name}
            exercise={part.exercises}
        />)}
    </>
)

export default Content