// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiaun5OZZXGm4HdMu1phSgujKSVFfaYAU",
  authDomain: "simple-firebase2-73f5c.firebaseapp.com",
  projectId: "simple-firebase2-73f5c",
  storageBucket: "simple-firebase2-73f5c.firebasestorage.app",
  messagingSenderId: "293050924209",
  appId: "1:293050924209:web:fc201d283beb1b6b233690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 export default auth;