import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDw-4J5o8yJPrkojGSUp0N2v7vE7CFVYtU",
  authDomain: "swoop-813ff.firebaseapp.com",
  projectId: "swoop-813ff",
  storageBucket: "swoop-813ff.appspot.com",
  messagingSenderId: "998574733942",
  appId: "1:998574733942:web:a213ef7851f3849d5f7d57",
  measurementId: "G-KD28NL8XM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
