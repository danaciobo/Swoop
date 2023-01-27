import { Button, Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext} from 'react'
import DataContext from "../context";
import ClearIcon from '@mui/icons-material/Clear';



export default function Cart() {

  const { cart, setCart, showCart, setShowCart } = useContext(DataContext)

  const removeFromCart = (item) => {
    setCart(cart => cart.filter((cartItem) => cartItem._id !== item._id))
 }

  return (
    <Drawer open={showCart}
      onClose={() => setShowCart(false)}
      anchor='right'
      PaperProps={{ sx: { width: 300 }, padding: 3 }}
    >

      <Typography variant='h5' sx={{ marginLeft: 3, padding: 3, fontWeight: 'bold' }}>
        MyCart
      </Typography>
      <Box>
        {cart.length ? cart.map((cartItem) => <Box key={cartItem._id}> <Box
          sx={{ display: 'flex', alignItems: 'start', gap: 2, padding: 2 }}
        > <img
            src={`http://localhost:3005/${cartItem.image}`}
            height="40px"
            width="40px"
            alt={cartItem.title}
          />
          <Box display='flex' flexDirection='column' width='120px'>
            <Typography variant='body1'>
              {cartItem.title}
            </Typography>
            {/* <Typography variant='subtitle2'>
              {cartItem.description}
            </Typography> */}
          </Box>
          <Typography variant='body1' fontWeight={'bold'} width='30px' justifyContent={'flex-end'}>
            {'£' + cartItem.price}
          </Typography>
          <IconButton
              size="small"

              edge="end"
              aria-label="account of current user"
              onClick={() => {removeFromCart(cartItem)}}
              color="inherit"
            >
              < ClearIcon sx={{color: '#393937', fontSize: '20px'}} />
            </IconButton>
        </Box>
          <Divider variant="inset" />
        </Box>

        ) : <Typography variant='h6' sx={{ margin: 3 }}>No items in cart..</Typography>}

      </Box>
      <Stack spacing={2} m={2} pt={2} px={4}>
        <Typography variant='body1' align='right' sx={{fontWeight: 'bold'}}>
          Total: £{cart.length? cart.map(i=>i.price).reduce((a,b)=>a+b): '0'}
        </Typography>
        <Button variant='contained' color='primary' fullWidth='false'>
          Proceed to checkout
        </Button>
        <Button sx={{color: 'grey'}} onClick={() => setShowCart(false)}>
      Close
        </Button>
        </Stack>

    </Drawer>

  )
}