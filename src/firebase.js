// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your own config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBfvUGO47u5JTYYaH13LQXjUg3oTYgEjg8",
  authDomain: "portfolio-likes-cdc41.firebaseapp.com",
  projectId: "portfolio-likes-cdc41",
  storageBucket: "portfolio-likes-cdc41.firebasestorage.app",
  messagingSenderId: "51657461826",
  appId: "1:51657461826:web:136febb134da861160dddb",
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
