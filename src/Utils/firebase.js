// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBitUePPmOQ1yCe4RJxlA4NR9Pcs_jdeMQ",
  authDomain: "netflixgpt-fee38.firebaseapp.com",
  projectId: "netflixgpt-fee38",
  storageBucket: "netflixgpt-fee38.appspot.com",
  messagingSenderId: "154158944306",
  appId: "1:154158944306:web:54744b27c24df12bd3ec2b",
  measurementId: "G-MMQ2RRTVPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
