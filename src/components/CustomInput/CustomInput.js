import React from 'react'
import './CustomInput.css'

const CustomInput = ({message, label, placeholder}) => {
    return (
        <div className="customInputContainer">
            <div className="customInputContainer__error error-bubble">{message}</div>
            <div className="customInputContainer__input-group">
                <label className="custom-label">{label}</label>
                <input type="text" placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default CustomInput
