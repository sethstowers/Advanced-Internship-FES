// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWlV7sn35AnopEEwJCuZ_x3SNGhDPxqSw",
  authDomain: "advanced-internship-fes.firebaseapp.com",
  projectId: "advanced-internship-fes",
  storageBucket: "advanced-internship-fes.firebasestorage.app",
  messagingSenderId: "196630965895",
  appId: "1:196630965895:web:6e6015e405b1e572771222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);