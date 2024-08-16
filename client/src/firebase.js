// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5c235.firebaseapp.com",
  projectId: "mern-blog-5c235",
  storageBucket: "mern-blog-5c235.appspot.com",
  messagingSenderId: "339294636540",
  appId: "1:339294636540:web:b83ed728bb26c71c718a79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);