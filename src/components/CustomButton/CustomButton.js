import React from 'react'
import './CustomButton.css'
import PulseLoader from "react-spinners/PulseLoader";
const CustomButton = ({children, disable, loading, onClickHandler}) => {
    return (
        <button onClick={onClickHandler} className="customButton" disabled={disable}>
            <PulseLoader 
            size={10}
            color={"#fff"}
            loading={loading}
            />
            {!loading && children}
        </button>
    )
}
export default CustomButton
