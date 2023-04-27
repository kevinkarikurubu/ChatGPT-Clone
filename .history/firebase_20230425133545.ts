import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFireStore, getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjZ6orVxuuFwtvSkfjsPIpfh-kWDBkgC8",
  authDomain: "chatgpt-clone-d0943.firebaseapp.com",
  projectId: "chatgpt-clone-d0943",
  storageBucket: "chatgpt-clone-d0943.appspot.com",
  messagingSenderId: "1010268808296",
  appId: "1:1010268808296:web:24885403c32c6c2c0687dd"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)