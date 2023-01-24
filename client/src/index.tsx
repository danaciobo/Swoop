import React from 'react';
import ReactDOM from 'react-dom/client';
//import './config/firebase-config';
import App from './App';
import { Provider } from 'react-redux';
import {compose, createStore} from 'redux'
import Reducer from './reducer'
import { Auth0Provider } from '@auth0/auth0-react'


const domain:string | undefined = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId:string | undefined = process.env.REACT_APP_AUTH0_CLIENT_ID

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = createStore(Reducer, composeEnhancers())

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain as string}
      clientId={clientId as string}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);


