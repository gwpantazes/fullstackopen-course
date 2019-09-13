import React from 'react'
import './index.css'

const Notification = ({ message }) => {
    if (!message) {
        return null
    }

    const typeToClass = (type) => {
        switch(type) {
            case "SUCCESS":
                return "success"
            case "FAILURE":
                return "failure"
            default:
                console.error("Invalid notification type", type);
        }
    }

    return (
        <div className={`notification ${typeToClass(message.type)}`}>
            <p>{message.message}</p>
        </div>
    )
}

export default Notification