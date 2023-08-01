// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnfdM9nEGW4yX2s-U-CuewqWWPXMZTW74",
  authDomain: "real-a2330.firebaseapp.com",
  projectId: "real-a2330",
  storageBucket: "real-a2330.appspot.com",
  messagingSenderId: "749579945149",
  appId: "1:749579945149:web:1325bf048167011873e3d4",
  measurementId: "G-Y8TVS507L6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
