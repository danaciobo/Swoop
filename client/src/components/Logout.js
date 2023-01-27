import auth from '../auth';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services'
import { Button } from '@mui/material';

export default function Logout ({setIsAuthenticated, setState}) {
  let navigate = useNavigate();
  const handleClick = () => {
    logout();
    handleAuth();
    setState(initialStateUser);
  };
  const initialStateUser = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    _id: '',
    itemsForSale : [],
    itemsBought:[]
  };
  const handleAuth = () => {
    setIsAuthenticated(false);
    auth.logout(() => navigate('/'));
  };

  return (
    <div>
       <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' } }} onClick={() => handleClick()}>
        Logout
      </Button>
      <Button variant="contained" size='small' sx={{ display: { xs: 'block', md: 'none' } }} onClick={() => handleClick()}>
        Logout
      </Button>
    </div>
  );
};
