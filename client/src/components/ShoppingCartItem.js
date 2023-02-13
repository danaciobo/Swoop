import React from 'react';
import { getItemById, deleteItem } from '../services';
import { IconButton, styled, Typography } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';

export default function ShoppingCartItem({ cartItem, cart, setCart,user }) {
 
  const removeFromCart = () => {
    const newCart = cart.filter((item) => item.id !== cartItem.id);

    console.log(localStorage.key(0));
    localStorage.setItem(`myCart-${user.email}`, JSON.stringify(newCart));
    setCart(newCart)

  };

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt='complex' src={cartItem.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {cartItem.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {cartItem.description}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='body2' color='text'>
                {cartItem.location}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction='column'
            spacing={2}
            align='right'
            sx={{ marginRight: 3 }}
          >
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {'£' + cartItem.price}
              </Typography>
            </Grid>
            <Grid item xs>
              <IconButton color='primary'>
                <RemoveShoppingCartIcon
                  onClick={() => removeFromCart()}
                  variant='outlined'
                  sx={{ color: '#E25F1C' }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
