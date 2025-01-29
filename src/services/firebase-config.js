// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eshop-project-7f754.firebaseapp.com",
  projectId: "eshop-project-7f754",
  storageBucket: "eshop-project-7f754.firebasestorage.app",
  messagingSenderId: "1044440273437",
  appId: "1:1044440273437:web:927e2341a1045ef1656cf4",
};

console.log("Firebase Config:", firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase App Initialized:", app);
export const db = getFirestore(app);
console.log("Firestore DB Instance:", db);
