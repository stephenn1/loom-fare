// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRSnVv1TJj04Xrb5FcsCmZkJvfqm1ZWVA",
  authDomain: "loom-fare-1fbee.firebaseapp.com",
  projectId: "loom-fare-1fbee",
  storageBucket: "loom-fare-1fbee.firebasestorage.app",
  messagingSenderId: "798886601120",
  appId: "1:798886601120:web:e1d5573b9cd683659444c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
