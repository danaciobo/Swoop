import { getItemById, deleteItem } from '../services';
import { useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditItem from "./EditItem";
import { useNavigate, useParams } from "react-router-dom";

export default function ItemDetails({user, id, item, setCurrentItem,items ,setItems, cart, setCart}) {
  const navigate = useNavigate()
  useEffect(() => {
    getItemById(params.id)
      .then(response => {
        console.log(params.id)

        setCurrentItem(response)
      })
      .catch((err) => console.log(err));
  }, );

  const deleteThis = async () => {
    try {
      const res = await deleteItem(item.id)
      const newItemList = items.filter((element) =>{ return element.id !== item.id })
      setItems(newItemList)
     navigate('/Profile')
      return res
    } catch (e) {
      console.log(e);
    }
  };

  console.log(user)
  console.log(item)
  const params = useParams()

  const addToCart = ()=>{
    const oldCart = cart

    if(!oldCart.includes(item)){
    setCart([...oldCart, item])

    localStorage.setItem(`myCart-${user.email} `, JSON.stringify(cart))
    }}

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          float: 'top',
          direction: 'row',
          pl: 5,
          m: 1,
          borderRadius: 1,
          border: 0.5,
          background: "#EBE6DD",
        }}
      >

      <Box sx={{
        width: 450,
        height: 450,
        marginTop: 5,
        marginBottom: 10,
      }}>

        <img
          src={item.image}
          alt={item.title}
          height='auto'
          width='100%'
          />
    </Box>
    <Box sx={{
        width: 350,
        height: 450,
        marginTop: 5,
        marginBottom: 10,
      }}>
        <Typography gutterBottom variant="h5" component="div" align='center'>
              {item.title}
            </Typography>
            <List sx={{ width: '100%', maxWidth: 400, marginTop: 1 }}>
              <ListItem>
                <ListItemText primary="Price" secondary={'$'+ item.price} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" secondary={item.location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Description" secondary={item.description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Category" secondary={item.category} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Added" secondary={item.date_added} />
              </ListItem>
            </List>
     </Box>
     <Box sx={{
       width: 350,
       height: 450,
       marginTop: 5,
       marginBottom: 10,
      }}>
      <Typography gutterBottom variant="h5" component="div" align='left'>
              {item.seller_name? item.seller_name : ''}
        </Typography>
        { item.seller === user.email ?
        <Stack direction="row" spacing={2}>
          <Button
          onClick={ deleteThis}
          variant="contained"
           sx={{ display: { xs: "none", md: "flex", background: "#E25F1C" } }}endIcon={<DeleteIcon />}>
            Delete
          </Button>
            <EditItem id={id} item={item} setCurrentItem={setCurrentItem} />
          </Stack>
          :
          <Button variant="contained" sx={{ background: "#E25F1C" }} onClick = {addToCart}>
              <ShoppingCartIcon />

            </Button>}
        </Box>
      </Box>
    </Container>
  );
}
