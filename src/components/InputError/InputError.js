import React from 'react';
import './InputError.css';

const InputError = ({children}) => {
    return (
        <div className="inputError__container">
            <i className="fas fa-exclamation-triangle"></i> {children}
        </div>
    )
}

export default InputError
