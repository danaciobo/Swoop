import DataContext from "./context"
import { useContext } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function useCart (item) {
  const {cart, setCart} = useContext(DataContext)

  const addToCart = () => {
    cart.findIndex((cartItem) => cartItem._id === item._id) >= 0
      ? setCart(cart => cart.filter((cartItem) => cartItem._id !== item._id))
    : setCart(cart => [...cart, item]) }

  const addToCartText = cart.findIndex((cartItem) => cartItem._id === item._id) >=0
    ? <DeleteForeverIcon sx={{color: 'black'}} /> : <ShoppingCartIcon />

    return { addToCart, addToCartText }
  }
