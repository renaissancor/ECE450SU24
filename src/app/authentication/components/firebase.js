// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPx--coL54qNaHrwh6hZQip55BItfZv7Y",
  authDomain: "capstone-project-86acd.firebaseapp.com",
  projectId: "capstone-project-86acd",
  storageBucket: "capstone-project-86acd.appspot.com",
  messagingSenderId: "566515423586",
  appId: "1:566515423586:web:15009376c0014a7e54b43b",
  measurementId: "G-4D5ZV0LWVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };