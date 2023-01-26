import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Profile from './Profile';
import App from '../App';
import { useEffect, useState } from 'react';
import { getUserByEmail } from '../services';
const Login = ({setUser}) => {


  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  console.log(user)

  setUser(user)


  return (
    <>
      {!isAuthenticated && (
        <Button
          variant='contained'
          sx={{ display: { xs: 'none', md: 'block' } }}
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>

      )}
    </>
  );
};

export default Login;
