import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import { getUserByEmail } from "../services";

export default function ItemList({ user, items, setCurrentItem, setUser , cart, setCart}) {

    
  return (
    <Container
      maxWidth={false}
      sx={{
        justifyContent: "space-between",
        width: "100%",
        paddingTop: "40px",
        background: "#EBE6DD",
      }}>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        spacing={{ xs: 3, md: 4 }}>
        {items ? (
          items
            .sort((a, b) => new Date(b.date_added) - new Date(a.date_added))
            .map((item) => (
              <Grid item key={item.id}>

                <ItemCard  item={item} setCurrentItem={setCurrentItem} 
                cart ={cart} setCart ={setCart} user= {user}/>


              </Grid>
            ))
        ) : (
          <p>Loading..</p>
        )}
      </Grid>
    </Container>
  );
}
