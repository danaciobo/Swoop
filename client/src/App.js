import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DataProvider } from './context';
import Dashboard from './components/Dashboard';

const { REACT_APP_BACKEND_HOST } = process.env;
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
      secondary: '#E25F1C'
    }
  }
});

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

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
        }

      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
      <BrowserRouter>
        <Navbar  setItems={setItems} items={items} setFilteredItems={setFilteredItems} />
        <Dashboard items={filteredItems} setItems={setItems} setFilteredItems={setFilteredItems}/>
      </BrowserRouter>
      <Footer />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
