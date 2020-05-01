import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from './Pages/SignUp';
import LogIn from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import Home from './Pages/Home';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnAuthenticatedRoute";
import Dashboard from './Pages/Dashboard';
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      {/* <AuthenticatedRoute exact path="/dashboard">
        <Dashboard/>
      </AuthenticatedRoute> */}
      <AuthenticatedRoute exact path="/reset">
        <ResetPassword/>
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
          <SignUp/>
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signin">
          <LogIn/>
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/forgotpassword">
          <ForgotPassword/>
      </UnauthenticatedRoute>
    </Switch>
  );
}