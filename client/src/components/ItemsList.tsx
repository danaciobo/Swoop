import { Container, Grid } from '@mui/material';
import ItemCard from './ItemCard';
import { Item } from '../Types/Types';
import { useSelector } from 'react-redux';

export default function ItemList({filtereditems}: {filtereditems: Item[]}) {

  return (
    <Container test-maxWidth={false} sx={{ justifyContent: 'space-between', width: '100%', paddingTop: '40px', background: '#EBE6DD' }}>
      <Grid container
        direction="row"
        alignItems="stretch"
        spacing={{ xs: 3, md: 4 }}
      >
        {filtereditems? filtereditems.sort((a:Item, b:Item) => new Date(b.date_added).valueOf() - new Date(a.date_added).valueOf()).map((item: Item, index: number) =>
        (
          <Grid item key={item._id} data-testid='itemCardGrid'>
            <ItemCard item={item} />
          </Grid>)) : <p>Loading..</p>
        }
      </Grid>
    </Container>
  );
}

