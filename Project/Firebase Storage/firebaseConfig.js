// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRV600j-CDxyllcPDn3sYbOwLT_-rfdT0",
  authDomain: "fir-demo-446d8.firebaseapp.com",
  projectId: "fir-demo-446d8",
  storageBucket: "fir-demo-446d8.firebasestorage.app",
  messagingSenderId: "665527509902",
  appId: "1:665527509902:web:192ec5dcb153c243f1fadf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db};