import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjZ6orVxuuFwtvSkfjsPIpfh-kWDBkgC8",
  authDomain: "chatgpt-clone-d0943.firebaseapp.com",
  projectId: "chatgpt-clone-d0943",
  storageBucket: process.env.,
  messagingSenderId: process.env.,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}