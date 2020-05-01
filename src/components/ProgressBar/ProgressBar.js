import React from 'react'
import './ProgressBar.css';

const ProgressBar = ({grade}) => {
    return (
        <div className="progressBar__container">
            <p className="progressBar__title">Password Strength</p>
            <progress className={`${grade.quality}`} max="100" value={grade.percentage}></progress>
            <p className="progressBar__grade">{grade.quality}</p>
        </div>
    )
}

export default ProgressBar
