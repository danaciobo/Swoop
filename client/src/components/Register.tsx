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

export default function Register() {

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value)
    const newUser = { email, firstName, lastName, phoneNumber }
    setEmail('');
    setFirstName('');
    setLastName('');
    setphoneNumber('');
    setPassword('');
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
      <Dialog open={open} onClose={handleClose} >
        <DialogActions>
          <IconButton sx={{ padding: 0 }} onClick={handleClose} >
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: 'center', padding: 0 }}>Register</DialogTitle>
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="First Name"
                variant="outlined"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="Last Name"
                variant="outlined"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Phone Number"
              variant="outlined"
              required
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />

            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Password"
              type="password"
              variant="outlined"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              sx={{ width: '16em', height: '3em' }}
              variant="contained"
              color="primary"
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
