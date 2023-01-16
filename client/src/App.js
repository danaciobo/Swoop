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
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Banner />
      <ItemList />
      <AddItem />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AddItem" element={<AddItem />} />
        </Routes>
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;
