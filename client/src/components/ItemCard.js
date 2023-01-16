import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, Button, CardActionArea, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ItemCard({ item }) {
  return (
    <div>
      <Card raised sx={{ width: 250, height: 350}}>
        <CardActionArea>
          <CardContent sx={{padding: 0}}>
            <img
              src={`http://localhost:3005/${item.image}`}
              height="250px"
              width="100%"
              // objectFit="contain"
              alt="product"
            />
          </CardContent>
        </CardActionArea>
        <CardHeader
          action={<IconButton sx={{padding: 2}}>
            <FavoriteBorderIcon />
          </IconButton>}
          title={'$'+ item.price}
          subheader={item.title}
        />
      </Card>
    </div>)

}