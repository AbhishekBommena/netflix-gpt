// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIBDFKv6YUD9itqpxQ2XCdzq8Sx6pHreM",
  authDomain: "netflixgpt-257f4.firebaseapp.com",
  projectId: "netflixgpt-257f4",
  storageBucket: "netflixgpt-257f4.appspot.com",
  messagingSenderId: "1009203754157",
  appId: "1:1009203754157:web:0ec3fb09f71461736ac224",
  measurementId: "G-LY3XXZJ8TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();