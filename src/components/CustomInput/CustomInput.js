import React from 'react'
import './CustomInput.css'

const CustomInput = ({message, label, placeholder, name, value, onChange, type}) => {
    return (
        <div className="customInputContainer">
            <div className="customInputContainer__error error-bubble">{message}</div>
            <div className="customInputContainer__input-group">
                <label className="custom-label">{label}</label>
                <input name={name} value={value} onChange={onChange} type={type} placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default CustomInput
