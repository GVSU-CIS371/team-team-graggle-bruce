import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtChx9NwjePZvtG-3ACWh8ke16MTRvi1c",
  authDomain: "sports-site-daa20.firebaseapp.com",
  projectId: "sports-site-daa20",
  storageBucket: "sports-site-daa20.firebasestorage.app",
  messagingSenderId: "8941509170",
  appId: "1:8941509170:web:15db6b7dabae8f4f7e3a2b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, doc, setDoc, getDoc };

