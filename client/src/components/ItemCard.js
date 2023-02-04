import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Collapse, IconButton, styled } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment'
import useCart from '../helperFunctions';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function ItemCard({ item }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { addToCartText } = useCart(item);

  const [itemClicked, setItemClicked] = useState(null);

  const handleClick = (e) => {

    setItemClicked(e);

  }


  return (

    <Card sx={{ width: 250, height: 'auto' }}>
      <CardActionArea onClick={() => handleClick(item)}>
        <CardContent sx={{ padding: 0 }}>
          <img
            src={`http://localhost:3005/${item.image}`}
            height='200px'
            width='100%'
            alt={item.title}
          />
        </CardContent>
      </CardActionArea>
      <CardHeader
        title={'£' + item.price}
        subheader={item.title}
        action= {addToCartText}
      />
      <CardActions>
        <Typography paragraph sx={{ marginLeft: 2 }}>More details</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>

      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph >
            Seller: {item.seller ? item.seller : 'Dana C'}
          </Typography>
          <Typography paragraph>
            Location: {item.location}
          </Typography>
          <Typography paragraph>
            Category: {item.category}
          </Typography>
          <Typography paragraph>
            Description: {item.description}
          </Typography>
          <Typography paragraph>
            Added:{' ' + moment(item.date_added).format('MMMM Do YYYY')}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  );

}