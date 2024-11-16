// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULYiQ9S5oHEVBrCjMYHDG0jYolqsIAhw",
  authDomain: "auth-moha-milon-942c9.firebaseapp.com",
  projectId: "auth-moha-milon-942c9",
  storageBucket: "auth-moha-milon-942c9.firebasestorage.app",
  messagingSenderId: "982397282091",
  appId: "1:982397282091:web:fef8b68b56a05364ccc76e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;