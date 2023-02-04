import { createContext, useState } from 'react'
import auth from './auth';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const initialState = auth.isAuthenticated();
  const initialStateUser = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  };

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  const [user, setUser] = useState(initialStateUser);

  return (
    <DataContext.Provider value={{
      cart, setCart,
      showCart, setShowCart,
      isAuthenticated, setIsAuthenticated,
      user, setUser
    }}>
      {children}
    </DataContext.Provider>
  );
}


export default DataContext;