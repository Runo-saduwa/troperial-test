import React, {useContext, useEffect, useState} from 'react'
import {AppContext} from '../libs/contextLib';
import {Auth} from 'aws-amplify';
import {useHistory} from 'react-router-dom'
const Dashboard = () => {
    const [user, setUser] = useState(null);
    const history = useHistory()
    const {userHasAuthenticated} =  useContext(AppContext);
    useEffect(() => {
        const getUserData = async () => {
            const data = await Auth.currentAuthenticatedUser();
            setUser(data.attributes.email);
        }
        getUserData();
    }, [])

    async function handleLogout() {
        await Auth.signOut();
        userHasAuthenticated(false);
        
        history.push('/')
      }
    return (
        <div>
        <button onClick={handleLogout}>logout</button>
        {user && (
        <div>
            <h1>Welcome {user}</h1>
        </div>
        )}
        </div>
    )
}

export default Dashboard
