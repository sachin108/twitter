import firebase from "firebase/compat";
const firebaseConfig = {
  apiKey: "AIzaSyDHWpI2lrLNyDYKnT5UHMT3MAi0HICwHoY",
  authDomain: "twitter-3100f.firebaseapp.com",
  projectId: "twitter-3100f",
  storageBucket: "twitter-3100f.appspot.com",
  messagingSenderId: "607812864508",
  appId: "1:607812864508:web:61db0a302a4d958a268a79",
  measurementId: "G-2ERLT8BGXL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;