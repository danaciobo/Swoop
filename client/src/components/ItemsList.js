import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import ItemCard from './ItemCard';





export default function ItemList({items}) {

  return (
    <Container maxWidth={false} sx={{ justifyContent: 'space-between', width: '100%', paddingTop: '40px', background: '#EBE6DD' }}>
      <Grid container
        direction="row"
        alignItems="stretch"
        spacing={{ xs: 3, md: 4 }}
      >
        {items? items.map((item, index) =>
        (
          <Grid item key={item._id} >
            <ItemCard item={item} />
          </Grid>)) : <p>Loading..</p>
        }
      </Grid>
    </Container>
  );
}

