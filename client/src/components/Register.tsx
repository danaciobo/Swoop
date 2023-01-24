import React, { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { registerUser } from "../services";
import { useDispatch, useSelector } from 'react-redux'

export default function Register() {

  const registerState = useSelector((state:any) => state.Registration)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    dispatch({type: 'OPEN'});
  };

  const handleClose = () => {
    dispatch({type: 'OPEN'});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value)
    const newUser = { email: registerState.email, firstName: registerState.firstName, lastName: registerState.lastName, phoneNumber: registerState.phoneNumber }
    dispatch({type: 'REG_EMAIL', payload: ''})
    dispatch({type: 'FIRST_NAME', payload: ''})
    dispatch({type: 'LAST_NAME', payload: ''})
    dispatch({type: 'PHONE_NUMBER', payload: ''})
    dispatch({type:'REG_PASSWORD', payload:''});
    registerUser(newUser);
    handleClose();
  };



  return (
    <div>
      {/* <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' } }} onClick={handleClickOpen}>
        Log in/ Register
      </Button>
      <Button variant="contained" size='small' sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleClickOpen}>
        Log in/ Register
      </Button> */}
      <Dialog open={registerState.open} onClose={handleClose} >
        <DialogActions>
          <IconButton sx={{ padding: 0 }} onClick={handleClose} data-testid = 'closeReg'>
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: 'center', padding: 0 }} data-testid='RegisterTitle'>Register</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "2rem",
              maxWidth: '300px'
            }}
          >
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Email"
              type="email"
              variant="outlined"
              inputProps={{ "data-testid": "email-input" }}
              required
              value={registerState.Email}
              onChange={(e) => dispatch({type: 'REG_EMAIL', payload: e.target.value})}
            />
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="First Name"
                variant="outlined"
                inputProps={{ "data-testid": "first-input" }}
                required
                value={registerState.firstName}
                onChange={(e) => dispatch({type: 'FIRST_NAME', payload: e.target.value})}
              />
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="Last Name"
                variant="outlined"
                inputProps={{ "data-testid": "last-input" }}
                required
                value={registerState.lastName}
                onChange={(e) => dispatch({type: 'LAST_NAME', payload: e.target})}
              />
            </div>
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Phone Number"
              variant="outlined"
              inputProps={{ "data-testid": "phone-input" }}
              required
              value={registerState.phoneNumber}
              onChange={(e) => dispatch({ type: 'PHONE_NUMBER', payload: e.target.value})}
            />

            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Password"
              type="password"
              variant="outlined"
              inputProps={{ "data-testid": "pass-input" }}
              required
              value={registerState.regPassword}
              onChange={(e) => dispatch({type: 'REG_PASSWORD', payload:e.target.value})}
            />
            <Button
              sx={{ width: '16em', height: '3em' }}
              variant="contained"
              color="primary"
              data-testid = 'registersub'
              type="submit"
              onClick={handleClose}
            >
              Register
            </Button>
            <Link href="/Login" variant="body2" sx={{ padding: 3 }}>
              Already have an account? Sign in
            </Link>
          </form>
        </DialogContent>

      </Dialog>
    </div >
  );
}
