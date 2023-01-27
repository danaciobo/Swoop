import ItemList from "./ItemsList";
import Banner from "./Banner";
import Cart from "./cart";


export default function Home ({items, state}){

return (
  <div className='homePage'>
  <Banner />
  <ItemList items={items}/>
  <Cart />
  </div>
)

}