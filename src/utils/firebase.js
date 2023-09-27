// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU6gOX8_lodbQytSxVI5w1G8SYvhxJRKg",
  authDomain: "netflixgpt-e000b.firebaseapp.com",
  projectId: "netflixgpt-e000b",
  storageBucket: "netflixgpt-e000b.appspot.com",
  messagingSenderId: "2897569783",
  appId: "1:2897569783:web:91ea55fc90e37058db70f2",
  measurementId: "G-S2722KZ91E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
