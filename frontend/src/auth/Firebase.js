// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsNepNbR-vMhvh6qtDDdBz-EdzABm81Qc",
  authDomain: "auth-frontend-finalwork.firebaseapp.com",
  projectId: "auth-frontend-finalwork",
  storageBucket: "auth-frontend-finalwork.appspot.com",
  messagingSenderId: "2852878559",
  appId: "1:2852878559:web:a5d8f8483f342cb2d6916a"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;