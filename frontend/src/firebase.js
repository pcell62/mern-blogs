// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7a154.firebaseapp.com",
  projectId: "mern-blog-7a154",
  storageBucket: "mern-blog-7a154.appspot.com",
  messagingSenderId: "753513757622",
  appId: "1:753513757622:web:df4c851adcbeea39151f17",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
