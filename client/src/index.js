import React from 'react';
import ReactDOM from 'react-dom/client';
import './config/firebase-config';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './login';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(window.location.origin);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='lukesaunders.uk.auth0.com'
      clientId='EMPkHXnEaeR62SaSJbXNbcT7sJh0Zvgg'
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/',
      }}
      <BrowserRouter>
      <App />
       </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
