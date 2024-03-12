import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMxw1loCq0hgdgWCxPCXkgTMHXGZeNIV8",
  authDomain: "smart-billing-c16af.firebaseapp.com",
  projectId: "smart-billing-c16af",
  storageBucket: "smart-billing-c16af.appspot.com",
  messagingSenderId: "910912001098",
  appId: "1:910912001098:web:f5d1923c7a51c641cbc2b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);