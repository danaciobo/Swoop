import ItemList from "./ItemsList";
import Banner from "./Banner";


export default function Home ({items, state}){

return (
  <div className='homePage'>
  <Banner />
  <ItemList items={items}/>
  </div>
)

}