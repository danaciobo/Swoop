import Button from '@mui/material/Button';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function LoginButton() {

const {loginWithRedirect, logout, isAuthenticated} = useAuth0()


  return (
    <div>
      {!isAuthenticated && (
      <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' } }} onClick={() => loginWithRedirect()} data-testid='Loginbutton'>
        Log in
      </Button>
      )}
      {isAuthenticated && (
      <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' } }} onClick={() => logout()} data-testid='LogoutButton'>
        Log out
      </Button>
      )}
    </div >
  );
}
