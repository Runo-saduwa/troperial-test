import React from 'react';
import { Switch } from 'react-router-dom';
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
      <UnauthenticatedRoute exact path="/">
      <NotificationsPage />
        {/* <LogIn /> */}
      </UnauthenticatedRoute>
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
