import React from 'react'

const SearchFilter = ({ filter, onChange }) => <div>
    filter by name: <input value={filter} onChange={onChange} />
</div>

export default SearchFilter