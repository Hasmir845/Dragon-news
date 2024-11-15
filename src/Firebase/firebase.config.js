// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeHahOF-ih0lhG-A6E4apjSE_uo9wSscI",
  authDomain: "dragon-news-e887f.firebaseapp.com",
  projectId: "dragon-news-e887f",
  storageBucket: "dragon-news-e887f.firebasestorage.app",
  messagingSenderId: "463501030960",
  appId: "1:463501030960:web:f6049b1206ad44c7791ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)