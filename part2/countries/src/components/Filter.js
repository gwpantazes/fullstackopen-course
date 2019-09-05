import React from 'react'

const Filter = ({ filter, onChange }) => {
    return (
        <div>
            <label>Find countries</label>
            &nbsp;
            <input value={filter} onChange={onChange}/>
        </div>
    )
}

export default Filter