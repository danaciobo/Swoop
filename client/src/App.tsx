import React from 'react';
import {FC} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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


const myURL = "http://localhost:3005/items"

const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'Roboto'
    ].join(','),
  },
  //if ui breaks this is culprit
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
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])
  const [user, setUser] = useState(null)
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
          <Route path="/Profile" element={<Profile items={items} /*user={user} has it own user state, change after redux*/ />} />
          {/* <Route path="/AddItem" element={<AddItem />} /> */}
          <Route path="/Login" element={<Login setUser={setUser}/>} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter >
      <Footer />
      {/* </DataProvider> */}
    </ThemeProvider>
  );
}

export default App;




  //   const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });