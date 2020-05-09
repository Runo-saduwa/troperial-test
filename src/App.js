import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
export default App;
