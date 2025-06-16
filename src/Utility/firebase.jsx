// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//  authentication and Firestore services
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmt4jUwNMtD4F7T9dOxRNdr308nWg5Co",
  authDomain: "clone-2658b.firebaseapp.com",
  projectId: "clone-2658b",
  storageBucket: "clone-2658b.firebasestorage.app",
  messagingSenderId: "322346144039",
  appId: "1:322346144039:web:becb53af83c44546eed902",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
