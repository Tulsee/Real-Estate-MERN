// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-6c84b.firebaseapp.com",
  projectId: "real-estate-mern-6c84b",
  storageBucket: "real-estate-mern-6c84b.appspot.com",
  messagingSenderId: "1069841070753",
  appId: "1:1069841070753:web:fde674d4282f41da298ee0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
