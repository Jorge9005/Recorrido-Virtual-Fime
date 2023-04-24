// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD8f1Khe38NyK1wCoAHg66n7b9acQrHC8",
  authDomain: "recorrido-virtual-fime.firebaseapp.com",
  projectId: "recorrido-virtual-fime",
  storageBucket: "recorrido-virtual-fime.appspot.com",
  messagingSenderId: "155279792203",
  appId: "1:155279792203:web:d366874691e9e8e9a755ce"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
