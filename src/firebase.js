// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhmIaPYTBaP5G4teHnD76Dc0TagLTCu_A",
  authDomain: "real-c74d7.firebaseapp.com",
  projectId: "real-c74d7",
  storageBucket: "real-c74d7.appspot.com",
  messagingSenderId: "340496252523",
  appId: "1:340496252523:web:d3be9a4695f379b1d47b2e",
  measurementId: "G-V38VVGRKC7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
