import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'Roboto'
    ].join(','),
  },
  palette: {
    primary: {
      main: "#00ff00"
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

    <Navbar />
    /* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

    </Routes>
    </BrowserRouter > */
  );
}

export default App;
