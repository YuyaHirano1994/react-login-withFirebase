// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLTnEMw48ojIA3JJpdEXleDatby0cBehA",
  authDomain: "first-firebase-754ee.firebaseapp.com",
  projectId: "first-firebase-754ee",
  storageBucket: "first-firebase-754ee.appspot.com",
  messagingSenderId: "802326474013",
  appId: "1:802326474013:web:218aff31be2b6a009ec5f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
