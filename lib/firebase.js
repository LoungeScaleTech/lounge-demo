// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOioI7atHsKaxqcpOpUaD9t_yhygqe9sA",
  authDomain: "lounge-backend.firebaseapp.com",
  projectId: "lounge-backend",
  storageBucket: "lounge-backend.appspot.com",
  messagingSenderId: "91071771489",
  appId: "1:91071771489:web:cedfd6d799b6f175614b20",
  measurementId: "G-MPL1GZPN6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);