import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>
              <Link to="/signup">sign up</Link>
        <Link to="/signin">sign in</Link>
        <Link to="/forgotpassword">forgotpassword</Link>
        <Link to="/resetpassword">reset ResetPassword</Link>
        </div>
    )
}

export default Home
