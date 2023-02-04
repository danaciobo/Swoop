import React from 'react';
import { Container, Grid } from '@mui/material';
import ItemCard from './ItemCard';


export default function ItemList({ items }) {
  return (
    <Container maxWidth={false} sx={{ justifyContent: 'space-between', width: '100%', paddingTop: '40px', background: '#EBE6DD' }}>
      <Grid container
        direction='row'
        alignItems='stretch'
        spacing={{ xs: 3, md: 4 }}
      >
        {items? items.sort((a, b) => new Date(b.date_added) - new Date(a.date_added)).map((item, index) =>
        (
          <Grid item key={item._id} >
            <ItemCard item={item} />
          </Grid>)) : <p>Loading..</p>
        }
      </Grid>
    </Container>
  );
}

