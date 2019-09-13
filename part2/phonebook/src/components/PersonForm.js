import React from 'react'

const PersonForm = ({ 
    submit, 
    newName, 
    handleNameChange, 
    newNumber, 
    handleNumberChange
}) => {
    return (
        <>
            <h2>Add a new</h2>
            <form onSubmit={submit}>
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
        </>
    )
}

export default PersonForm