import {createContext, useEffect, useState} from 'react'

const DataContext = createContext({});

export const DataProvider = ({children}) => {

//   const [items, setItems] = useState([]);

//   useEffect(() => {

//     getData()
//   }, []);
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false)

  return (
    <DataContext.Provider value={{
      cart, setCart, showCart, setShowCart
    }}>
      {children}
    </DataContext.Provider>
  )
}


export default DataContext;