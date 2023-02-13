import React, { useEffect } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { Container, Grid, Typography,} from "@mui/material";
import Button from "@mui/material/Button";
import { checkout } from "../services";
function ShoppingCart({item, cart, setCart , user}) {

  console.log(item)


  //   useEffect(()=>{
  //       console.log(cart)
  //       const myCart = JSON.parse(localStorage.getItem(`myCart-${user.email}`));
  //   if (myCart) {
  //    setCart(myCart);
  //   }}
  // , [cart]);

  const payUp = async()=>{
    console.log(cart)
    checkout(cart)
  }

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
            <ShoppingCartItem cartItem={cartItem} setCart={setCart} cart={cart} user={user} />
          </Grid>
        ))
      ) : (
        <p>Cart is empty</p>
      )}

        <Grid
          container
          direction="row"
          spacing={{ xs: 5, md: 1 }}
          alignItems="center"
          justifyContent="center"
        >

        <Button
          variant="contained"
          sx={{ width: 200 }}
          onClick={payUp}
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
