import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("")


  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, phoneNumber);
    setFirstName('');
    setLastName('');
    setphoneNumber('');
    setEmail('');
    setPassword('');
    handleClose();
  };



  return (
    <div>
      <Button variant="contained" sx={{display: { xs: 'none', md: 'block'} }} onClick={handleClickOpen}>
        Log in/ Register
      </Button>
      <Button variant="contained" size='small' sx={{display: { xs: 'block', md: 'none'} }} onClick={handleClickOpen}>
        Log in/ Register
      </Button>
      <Dialog open={open} onClose={handleClose} >
      <DialogActions>
      <IconButton sx={{padding: 0}} onClick={handleClose} >
            <CloseIcon sx={{fontSize: '1.3em'}}/>
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{textAlign: 'center', padding: 0}}>Register</DialogTitle>
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
              sx={{ width: '17em', marginBottom: '0.7em'  }}
              label="Email"
              type="email"
              variant="outlined"
              required
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em'  }}
              label="First Name"
              variant="outlined"
              required
              value={firstName}
              onChange = {(e) => setFirstName(e.target.value)}
            />
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em'  }}
              label="Last Name"
              variant="outlined"
              required
              value={lastName}
              onChange = {(e) => setLastName(e.target.value)}
            />
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em'  }}
              label="Phone Number"
              variant="outlined"
              required
              value={phoneNumber}
              onChange = {(e) => setphoneNumber(e.target.value)}
            />

            <TextField
               sx={{ width: '17em', marginBottom: '0.7em'  }}
              label="Password"
              type="password"
              variant="outlined"
              required
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
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
          </form>
        </DialogContent>

      </Dialog>
    </div >
  );
}
