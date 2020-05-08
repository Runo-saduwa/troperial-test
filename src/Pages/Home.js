import React, { Fragment } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { AppContext } from '../libs/contextLib';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
// import { Auth } from 'aws-amplify';
const Home = () => {
  // const history = useHistory();
  // const { isAuthenticated, userHasAuthenticated } = useContext(
  //   AppContext,
  // );
  // async function handleLogout() {
  //   await Auth.signOut();
  //   userHasAuthenticated(false);

  //   history.push('/');
  // }
  return (
    <Fragment>
      <NavBar />
      <Hero />
    </Fragment>
  );
};

export default Home;