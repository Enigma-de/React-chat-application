
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-application-38355.firebaseapp.com",
  projectId: "chat-application-38355",
  storageBucket: "chat-application-38355.firebasestorage.app",
  messagingSenderId: "870727565023",
  appId: "1:870727565023:web:6f0036aca9cd341fc9736a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db= getFirestore()
