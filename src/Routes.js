import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import UnauthenticatedRoute from './components/UnAuthenticatedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NotificationsPage from './Pages/NotificationsPage';
import ForgotPassword from './Pages/ForgotPassword';
import ListingsPage from './Pages/ListingsPage';
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/Login';
const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <h1>home</h1>
        <button><Link to="/signin">Log in</Link></button>
      </Route> */}
      {/* <UnauthenticatedRoute exact path="/signin"> */}
      <Route exact path="/" component={LogIn}/>

      {/* </UnauthenticatedRoute> */}
      <AuthenticatedRoute exact path="/listings">
        <ListingsPage />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notifications">
        <NotificationsPage />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <SignUp />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/forgotpassword">
        <ForgotPassword />
      </UnauthenticatedRoute>
    </Switch>
  );
};
export default Routes;
