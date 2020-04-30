import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {AppContext} from '../libs/contextLib';
import {Auth} from 'aws-amplify';
const Home = () => {

    const history = useHistory()
    const {isAuthenticated, userHasAuthenticated} =  useContext(AppContext);
    async function handleLogout() {
        await Auth.signOut();
        userHasAuthenticated(false);
        
        history.push('/')
      }
    return (
        <div>
         {isAuthenticated ? <button onClick={handleLogout}>logout</button>: 
             <div>
            <Link to="/signup">sign up</Link>
            <Link to="/signin">sign in</Link>
            <Link to="/forgotpassword">forgotpassword</Link>
            <Link to="/resetpassword">reset ResetPassword</Link>
        </div>
        }
        
        </div>
    )
}

export default Home
