// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD0Uhc1A_ER9mial6zMGzDdm_eO4a49Js",
    authDomain: "portfolio-4d7a4.firebaseapp.com",
    projectId: "portfolio-4d7a4",
    storageBucket: "portfolio-4d7a4.appspot.com",
    messagingSenderId: "305625228084",
    appId: "1:305625228084:web:f920cddba64691c27c3b61"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);



export {db, auth}