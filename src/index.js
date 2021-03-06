import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './libs/contextLib';
import { Provider } from 'react-redux';
import awsExports from './aws-exports';
import store from './store';
import Amplify from 'aws-amplify';
import App from './App';
Amplify.configure(awsExports);

ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
