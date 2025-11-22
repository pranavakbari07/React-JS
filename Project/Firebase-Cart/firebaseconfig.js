// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkVsQZ0VIAsKOA6511R0t3jSFIo0OABUU",
  authDomain: "cart-cc607.firebaseapp.com",
  projectId: "cart-cc607",
  storageBucket: "cart-cc607.firebasestorage.app",
  messagingSenderId: "167126455026",
  appId: "1:167126455026:web:2918b94ec4188d9910f66b",
  measurementId: "G-4KVXYS0WJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };