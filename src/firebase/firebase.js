import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyCuQGbLDO25qHSG0BfE3FlIgWglbalZbz0",
    authDomain: "e-commerce-b360c.firebaseapp.com",
    projectId: "e-commerce-b360c",
    storageBucket: "e-commerce-b360c.appspot.com",
    messagingSenderId: "910744361852",
    appId: "1:910744361852:web:cc4b8156e507bc80ac22f9"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
//   };