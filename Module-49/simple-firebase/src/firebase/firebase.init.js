// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd4Mwnd0W1tHwyWfKIUi9e9TBqJNyBGn8",
  authDomain: "simple-firebase-c607d.firebaseapp.com",
  projectId: "simple-firebase-c607d",
  storageBucket: "simple-firebase-c607d.firebasestorage.app",
  messagingSenderId: "243263971197",
  appId: "1:243263971197:web:c41e0ae4f95aeaa5fdb614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;