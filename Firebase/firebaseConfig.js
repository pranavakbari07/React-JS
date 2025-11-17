// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu6K5T8S1mRMq_1PzF-_3jp5183vp80_I",
  authDomain: "fir-demo-3aa7d.firebaseapp.com",
  projectId: "fir-demo-3aa7d",
  storageBucket: "fir-demo-3aa7d.firebasestorage.app",
  messagingSenderId: "883468583838",
  appId: "1:883468583838:web:4d2795acf85a5453f80c8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };