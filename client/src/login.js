import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  console.log(user);

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Log In</button>
    )
  );
};

export default LoginButton;
