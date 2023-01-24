import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import ItemList from './components/ItemsList';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import Payment from './Payment';
import Completion from './Completion';
import ItemDetails from './components/ItemDetails';

const myURL = 'http://localhost:4001/items';

const theme = createTheme({
  typography: {
    fontFamily: ['Source Sans Pro', 'Roboto'].join(','),
  },
  palette: {
    primary: {
      main: '#63171D',
      secondary: '#E25F1C',
    },
  },
});

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  
  
  const [user, setUser] = useState({});
  
  const [currentItem, setCurrentItem] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(myURL);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
            );
          }
          const actualData = await response.json();
          if (actualData) {
            setItems(actualData);
            setFilteredItems(actualData);
            setUser(user);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }, []);
    
    const id = currentItem.id
    console.log(id)
    console.log(currentItem)
    return (
      <>
      <ThemeProvider theme={theme}>
        <Navbar
          setItems={setItems}
          items={items}
          setFilteredItems={setFilteredItems}
          user={user}
          setUser={setUser}
        />

        <Banner />

        <Routes>
          <Route
            path='/'
            element={
              <ItemList
                id={id}
                items={filteredItems}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route path='/completion' element={<Completion />} />
          <Route
            path='/All'
            element={
              <ItemList
                id={id}
                items={filteredItems}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                user={user}
                setUser = {setUser}
              />
            }
          />
            {/* <Route
            path='/Accessories'
            element={
              <ItemList
                items={filteredItems}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
              />
            } */}
          {/* /> */}

          <Route
            path='/Profile'
            element={
              <Profile
                items={items}
                user={user}
                setCurrentItem={setCurrentItem}
              />
            }
          />

          <Route
            path= {`/ItemDetails/${id}`}
            element={

              <ItemDetails id ={id} item={currentItem} setCurrentItem={setCurrentItem} items={items} setItems ={setItems}/>
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
