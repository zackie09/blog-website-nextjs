import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDETp2zNV8ZOoRtSQBTNIWPSmpy_vPYZVs",
    authDomain: "blog-website-nextjs-iota.vercel.app",
    projectId: "kitaro-38fd4",
    storageBucket: "kitaro-38fd4.appspot.com",
    messagingSenderId: "720186277567",
    appId: "1:720186277567:web:d65ee0151312cf1909500a",
    measurementId: "G-BPLS4EZZ99"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();