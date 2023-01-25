import React, { useEffect } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { Container, Grid, Typography,} from "@mui/material";
import Button from "@mui/material/Button";

function ShoppingCart({item, cart, setCart}) {

  console.log(item)

    useEffect(()=>{
        console.log(cart)
        const myCart = JSON.parse(localStorage.getItem('myCart'));
    if (myCart) {
     setCart(myCart);
    }}
  , [cart]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          justifyContent: "space-between",
          width: "100%",
          paddingTop: "20px",
          background: "#EBE6DD",
        }}
      >
      <Typography variant='h4' mt={4} align='center' sx={{ marginBottom: 5 }}>My Cart</Typography>
        <Grid
          container
          direction="column"
          alignItems="stretch"
          spacing={{ xs: 3, md: 4 }}
        >
          {cart ? (
        cart.map((cartItem) => (
          <Grid cartItem key={cartItem.id}
          sx={{ marginTop: 3 }}>
            <ShoppingCartItem cartItem={cartItem} setCart={setCart} cart={cart} />
          </Grid>
        ))
      ) : (
        <p>Cart is empty</p>
      )}

        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={{ xs: 5, md: 1 }}

        >

        <Button
          variant="contained"
          sx={{ marginTop: 3, marginLeft: 95, width: 200, height: 40 }}
        >PAY NOW
        </Button>
        <Typography variant='h6' mt={4} sx={{ marginLeft: 10, marginBottom: 5 }}>
          total £ {cart.reduce((a, b) =>  {return a +  parseInt(b.price)}, 0)}
        </Typography>
          </Grid>
        </Grid>

      </Container>


    </>

  );
}

export default ShoppingCart;
