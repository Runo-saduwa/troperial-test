import React from 'react';
/**Pages */
import UnauthenticatedRoute from './components/UnAuthenticatedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/Dashboard';
import ListingsPage from './Pages/ListingsPage';
import NotificationsPage from './Pages/NotificationsPage';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/Login';
import Home from './Pages/Home';
/**Packages */
import { Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <UnauthenticatedRoute exact path="/">
        <Home />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/listings">
        <ListingsPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/notifications">
        <NotificationsPage />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <SignUp />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signin">
        <LogIn />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/forgotpassword">
        <ForgotPassword />
      </UnauthenticatedRoute>
    </Switch>
  );
};
export default Routes;
