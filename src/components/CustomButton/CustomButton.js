import React from 'react'
import './CustomButton.css'

const CustomButton = ({children}) => {
    return (
        <button className="customButton">
            {children}
        </button>
    )
}

export default CustomButton
