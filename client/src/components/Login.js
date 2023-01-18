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



export default function Login({ setUser }) {

  const [loggEmail, setLoggEmail] = useState("");
  const [loggPassword, setLoggPassword] = useState("");
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    const user = { email: loggEmail, password: loggPassword }
    // const loggedInUser = getUserByEmail(user);
    // setUser(loggedInUser)
    // setLoggEmail('');
    // setLoggPassword('');
    // handleClose();
  };


  return (
    <div>
      <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' } }} onClick={handleClickOpen}>
        Log in/ Register
      </Button>
      <Button variant="contained" size='small' sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleClickOpen}>
        Log in/ Register
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
              value={loggEmail}
              onChange={(e) => setLoggEmail(e.target.value)}
            />

            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Password"
              type="password"
              variant="outlined"
              required
              value={loggPassword}
              onChange={(e) => setLoggPassword(e.target.value)}
            />
            <Link href="/Profile" >
              <Button
                sx={{ width: '16em', height: '3em' }}
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleClose}
              >
                Login
              </Button>

            </Link>

            <Link href="/Register" variant="body2" sx={{ padding: 3 }}>
              Don't have an account yet? Register here
            </Link>
          </form>
        </DialogContent>
      </Dialog>
    </div >
  );
}
