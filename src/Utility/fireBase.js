 
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyCL15hR-RaaLqmCBaI3EiCUUoKFMXqlKwY",
  authDomain: "clone-9d32b.firebaseapp.com",
  projectId: "clone-9d32b",
  storageBucket: "clone-9d32b.firebasestorage.app",
  messagingSenderId: "440146054793",
  appId: "1:440146054793:web:422f5f54186866da558058",
};

const app = initializeApp(firebaseConfig);  // Initialize Firebase with the config
export const auth = getAuth(app);  // Get the Firebase Auth instance
export const db = getFirestore(app);  // Get the Firestore instance