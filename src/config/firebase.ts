// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYJWADto70ERRJ00L83nxoDShmvONcjto",
  authDomain: "loomtrust-2c8bb.firebaseapp.com",
  projectId: "loomtrust-2c8bb",
  storageBucket: "loomtrust-2c8bb.firebasestorage.app",
  messagingSenderId: "160761890808",
  appId: "1:160761890808:web:5c83cc0d7c5da89668380d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
