import React, {Fragment} from 'react';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Fragment>

      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={LogIn} />
          <Route exact path="/forgotpassword" component={ForgotPassword}/>
          <Route exact path="/resetpassword" component={ResetPassword}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
