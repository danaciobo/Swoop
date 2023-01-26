
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import ItemList from './components/ItemsList';
import Footer from './components/Footer'
import Profile from './components/Profile';
import LoginButton from './components/LoginButton';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { useDispatch, useSelector } from 'react-redux';


const myURL = "http://localhost:3006/items"

const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'Roboto'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#63171D'
    },
    secondary: {
      main: "#E25F1C"
    }
  }
});
function App() {

  const { isLoading, error } = useAuth0();

  const dispatch = useDispatch();
  const appState = useSelector((state: any) => state.App)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(myURL, {
          credentials: 'include',
          mode:'cors'
        })
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const actualData = await response.json();
        if (actualData) {
          dispatch({ type: 'APP_ITEMS', payload: actualData })
          dispatch({type: 'APP_FILTERED_ITEMS', payload: actualData})
        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [dispatch]);





  return (
    <ThemeProvider theme={theme}>
      <Navbar items={appState.items} user={appState.user} />
       {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}

      {!error && !isLoading && (
          <>
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList filtereditems={appState.filteredItems}/>} />
          <Route path="/Profile" element={<Profile items={appState.items} />} />
          <Route path="/Login" element={<LoginButton/>} />
        </Routes>
      </BrowserRouter >
          <Footer />
        </>
          )}
      </ThemeProvider>
  );
}

export default App;
