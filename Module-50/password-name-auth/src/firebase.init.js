// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd66ha62fI-CGTZ8kS2GcmV8gLRIv7CXs",
  authDomain: "email-password-auth-14524.firebaseapp.com",
  projectId: "email-password-auth-14524",
  storageBucket: "email-password-auth-14524.firebasestorage.app",
  messagingSenderId: "341071137722",
  appId: "1:341071137722:web:ab662f946b1c9f91146b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

