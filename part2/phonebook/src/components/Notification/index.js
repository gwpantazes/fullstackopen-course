import React from 'react'
import './index.css'

const Notification = ({ message }) => {
    if (!message) {
        return null
    }

    return (
        <div className="notification success">
            <p>{message}</p>
        </div>
    )
}

export default Notification