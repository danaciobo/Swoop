import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import ItemList from './components/ItemsList';
import Footer from './components/Footer';
import Register from './components/Register';
import AddItem from './components/AddItem';
import Profile from './components/Profile';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { DataProvider } from './context';
const { REACT_APP_BACKEND_HOST} = process.env;

const myURL = `${REACT_APP_BACKEND_HOST}/items`

const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'Roboto'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#63171D',
      secondary: "#E25F1C"
    }
  }
});

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])
  const [user, setUser] = useState(null)
  useEffect(() => {

    const getData = async () => {
      try {
        const response = await fetch(myURL);
        console.log(myURL)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const actualData = await response.json();
        console.log(items)
        if (actualData) {
          setItems(actualData);
          setFilteredItems(actualData)
        }

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <DataProvider> */}
      <Navbar setItems={setItems} items={items} setFilteredItems={setFilteredItems} user={user} setUser={setUser}/>
      {/* <ItemList items={items} /> */}
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList items={filteredItems}/>} />
          <Route path="/Profile" element={<Profile items={items} user={user} />} />
          {/* <Route path="/AddItem" element={<AddItem />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter >
      <Footer />
      {/* </DataProvider> */}
    </ThemeProvider>
  );
}

export default App;
