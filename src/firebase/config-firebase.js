import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmUJ9tYH2gb-RZPFBiE-TzaXh8xOx-GIA",
  authDomain: "crud-react-c3006.firebaseapp.com",
  projectId: "crud-react-c3006",
  storageBucket: "crud-react-c3006.appspot.com",
  messagingSenderId: "693174415939",
  appId: "1:693174415939:web:e6b29e6576b220efb45af6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
