import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import auth from '../auth';
import { register } from '../services';
import { useNavigate } from 'react-router-dom';


const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  password: ''
};


export default function Register({ setIsAuthenticated }) {

  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, firstName, lastName, phoneNumber, password } = state;
    const user = { email, firstName, lastName, phoneNumber, password };
    const res = await register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {

      setIsAuthenticated(true);
      auth.login(() => navigate('/profile'));
      handleClose();
    }

  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName || !state.phoneNumber
    );
  };

  return (
    <div>
      <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' } }} onClick={handleClickOpen}>
        Register
      </Button>
      <Button variant="contained" size='small' sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleClickOpen}>
        Register
      </Button>
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
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <div display="flex" flexDirection="rows">
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="First Name"
                variant="outlined"
                required
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="Last Name"
                variant="outlined"
                required
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </div>
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Phone Number"
              variant="outlined"
              required
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChange}
            />

            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Password"
              type="password"
              variant="outlined"
              required
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <Button
              sx={{ width: '16em', height: '3em' }}
              variant="contained"
              color="primary"
              type="submit"
              disabled={validateForm()}
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
