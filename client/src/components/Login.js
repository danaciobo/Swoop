import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import auth from '../auth';
import { login } from '../services'
import { useContext } from 'react';
import DataContext from '../context';

const initialState = {
  email: '',
  password: '',
};


export default function Login() {

  const { setIsAuthenticated, setUser } = useContext(DataContext)
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

    const { email, password } = state;
    const user = { email, password };
    const res = await login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {

      setIsAuthenticated(true);
      setUser(res);
      auth.login(() => navigate('/profile'));
    }
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };


  return (
    <div>
      <Button variant='contained' sx={{ display: { xs: 'none', md: 'block' } }} onClick={handleClickOpen}>
        Login
      </Button>
      <Button variant='contained' size='small' sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogActions>
          <IconButton sx={{ padding: 0 }} onClick={handleClose} >
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: 'center', padding: 0 }}>Login</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '2rem',
              maxWidth: '300px'
            }}
          >
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label='Email'
              type='email'
              variant='outlined'
              required
              name='email'
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label='Password'
              type='password'
              variant='outlined'
              required
              name='password'
              value={state.password}
              onChange={handleChange}
            />
            <Button
              sx={{ width: '16em', height: '3em' }}
              variant='contained'
              color='primary'
              type='submit'
              disabled={validateForm()}
              onClick={handleClose}
            >
              Login
            </Button>
            <Link href='/Register' variant='body2' sx={{ padding: 3 }}>
              Don't have an account yet? Register here
            </Link>
          </form>
        </DialogContent>
      </Dialog>
    </div >
  );
}
