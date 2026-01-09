// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJW3BXsvk2KLvUCeMpvLHnm1Yrl7OJE_U",
  authDomain: "portfolio-3a07d.firebaseapp.com",
  projectId: "portfolio-3a07d",
  storageBucket: "portfolio-3a07d.firebasestorage.app",
  messagingSenderId: "939304153280",
  appId: "1:939304153280:web:58c5c3662fdcb5623afd25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
