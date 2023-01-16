import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import ItemCard from './ItemCard';



const myURL = "http://localhost:3005/items"

export default function ItemList() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(myURL);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        console.log(items)
        if(actualData) {
          setItems(actualData);
        }

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, []);



  const addItem = async (title, description, price, quantity, sellerId, image, location, category) => {
    try {
      const response = await fetch(myURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, price, quantity, sellerId, image, location, category })
      });
      return response.json();
    } catch (err) {
      console.log(err)
      return false
    }
  }

  const postItem = async (title, description, price, quantity, sellerId, image, location, category) => {
    const newItem = await addItem(title, description, price, quantity, sellerId, image, location, category);
    if (newItem._id) {
      setItems(items => [...items, newItem])
    }
  }


  return (
    <Container maxWidth={false} sx={{ justifyContent: 'space-between', background: '#EBE6DD', width: '100%', paddingTop: '40px', }}>
        <Grid container
  direction="row"
  justifyContent="space-around"
  alignItems="stretch"
  // columns={{ xs: 4, sm: 8, md: 12 }}
  spacing={{ xs: 2, md: 3 }}
  >
          {items.length>0? items.map((item, index) =>
          (
            <Grid item xs={12} sm={6} md={3} lg={2.5} key={item._id} >
             <ItemCard item={item}/>
            </Grid> )): <p>Loading..</p>
        }
        </Grid>
    </Container>
  );
}

