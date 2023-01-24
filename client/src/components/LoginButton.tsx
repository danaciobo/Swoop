import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { getUserByEmail } from "../services";
import React from "react";
import { User } from "../Types/Types"
import { useDispatch, useSelector } from 'react-redux';
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
