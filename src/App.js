import React, { Fragment } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes />
      </Router>
    </Fragment>
  );
};
export default App;
