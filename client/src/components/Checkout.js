import { Button } from '@mui/material';
import DataContext from '../context';
import { useContext } from 'react';
import { checkoutStripe } from '../services';


export default function Checkout() {

  const { cart } = useContext(DataContext);

  const handleCheckout = () => {
    checkoutStripe(cart);
  }

  return (
    <Button variant='contained' color='primary' fullWidth='false' onClick={handleCheckout}>
      Proceed to checkout
    </Button>

  )
}