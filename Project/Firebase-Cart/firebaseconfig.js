// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2toF5mUgipEvhWrB6cOMF0uuwaUVdr34",
  authDomain: "add-to-cart-using-firebase.firebaseapp.com",
  projectId: "add-to-cart-using-firebase",
  storageBucket: "add-to-cart-using-firebase.firebasestorage.app",
  messagingSenderId: "830497574036",
  appId: "1:830497574036:web:ce8234806753d38520f881",
  measurementId: "G-7DZJ5CCYH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };