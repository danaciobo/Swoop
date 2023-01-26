import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  Button, CardActionArea, CardActions, Collapse, IconButton, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment'
import { Item, ExpandProps } from '../Types/Types';
import { useDispatch, useSelector } from 'react-redux'

const ExpandMore = styled((props: ExpandProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard({ item }: {item: Item}) {
  const dispatch = useDispatch()
  const itemCardState = useSelector((state:any)=>state.ItemCard)

  const handleExpandClick = () => {
    dispatch({type:'EXPAND'});
  };

  return (
    <Card sx={{ width: 250, height: 'auto'}} >
      <CardActionArea >
        <CardContent sx={{ padding: 0 }}>
          <img
            src={`http://localhost:3006/${item.image}`}
            height="200px"
            width="100%"
            alt={item.title}
          />
        </CardContent>
      </CardActionArea>
      <CardHeader
        data-testid= 'CardTitle'
        title={'£' + item.price}
        subheader={item.title}
        action={<Button variant='contained' sx={{background: '#E25F1C'}}>
          <ShoppingCartIcon />
        </Button>}
      />
      <CardActions>
      <Typography paragraph sx={{marginLeft: 2}}>More details</Typography>
      <ExpandMore
          expand={itemCardState.expanded}
          onClick={handleExpandClick}
          aria-expanded={itemCardState.expanded}
          aria-label="show more"
          data-testid ='ExpandButton'
        >
          <ExpandMoreIcon/>
        </ExpandMore>

        </CardActions>
        <Collapse in={itemCardState.expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography data-testid="seller" paragraph>
            Seller: {item.seller ? item.seller.firstName + ' ' + item.seller.lastName[0] : 'Dana C'}
          </Typography>
          <Typography paragraph>
            Location: {item.location}
          </Typography>
          <Typography paragraph>
            Category: {item.category}
          </Typography>
          <Typography paragraph data-testid="CardDesc">
            Description: {item.description}
          </Typography>
          <Typography paragraph>
            Added:{' ' + moment(item.date_added).format('MMMM Do YYYY')}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  )

}