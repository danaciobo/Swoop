import React, { useEffect } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart({cart, setCart}) {
    useEffect(()=>{
        console.log(cart)
        const myCart = JSON.parse(localStorage.getItem('myCart'));
    if (myCart) {
     setCart(myCart);
    }}
  , []);
    
  return (
    <div>
      {cart ? (
        cart.map((cartItem) => (
          <div cartItem key={cartItem.id}>
            <ShoppingCartItem cartItem={cartItem} setCart={setCart} />
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default ShoppingCart;
