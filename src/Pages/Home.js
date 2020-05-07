import React, { useContext, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../libs/contextLib';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import { Auth } from 'aws-amplify';
const Home = () => {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useContext(
    AppContext,
  );
  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);

    history.push('/');
  }
  return (
    <Fragment>
      <NavBar />

        <Hero />

    </Fragment>
  );
};

export default Home;

{
  /* {isAuthenticated ? <button onClick={handleLogout}>logout</button>: 
             <div style={{
                 width: "100%",
                 height: "20vh",
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center"
             }}>
            <div>
                <h3>Welcome to Troperial</h3>
            <Link to="/signup" style={{
                 textDecoration: "none",
                 background: "#333",
                 borderRadius: "3px",
                 padding: "10px 15px",
                 fontSize: "18px",
                 color: "#fff",
                 margin: "10px 10px"
             }}>sign up</Link>
             <Link to="/signin" style={{
                 textDecoration: "none",
                 background: "#333",
                 borderRadius: "3px",
                 padding: "10px 15px",
                 fontSize: "18px",
                 color: "#fff",
                 margin: "10px 10px"
             }}>Log in</Link>
            </div>
            </div>
        }
         */
}
