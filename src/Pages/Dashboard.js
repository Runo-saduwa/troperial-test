import React, {useContext} from 'react'
import {AppContext} from '../libs/contextLib';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const Dashboard = () => {
    return (
        <div>
           <ProgressBar/>
        </div>
    )
}

export default Dashboard
