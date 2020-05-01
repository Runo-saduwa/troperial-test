import React from 'react'
import './CustomAlert.css';
const Alert = ({message}) => {
    return (
        <div className="customAlert__container">
            
            <div>
            <i className="customAlert__icon fas fa-exclamation-circle"></i>
            <p className="customAlert__message">{message}</p>
            </div>
            <div>
                <span><i className="fas fa-times"></i></span>
            </div>
        </div>
    )
}

export default Alert
