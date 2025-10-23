// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
//import {getAuth} from "firebase/auth"
//import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3uZWGlaQ20JRsPtym8aZnXpe_5JO5lcg",
  authDomain: "week7-hongyuan.firebaseapp.com",
  projectId: "week7-hongyuan",
  storageBucket: "week7-hongyuan.firebasestorage.app",
  messagingSenderId: "138756377729",
  appId: "1:138756377729:web:a3c7b1500b2fae37919180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const auth = getAuth(app);
//const storage = getStorage(app);
export {db};
