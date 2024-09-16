// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeO0zUrO4JNddNP-9DfGRwXwUEzRK1Jbk",
  authDomain: "raj-app-a2b08.firebaseapp.com",
  projectId: "raj-app-a2b08",
  storageBucket: "raj-app-a2b08.appspot.com",
  messagingSenderId: "833970898383",
  appId: "1:833970898383:web:35489a5ad8325bbbdffeba",
  measurementId: "G-V7F0SNDEVS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
