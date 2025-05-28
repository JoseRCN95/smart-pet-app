import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBspAiS1DojxXdC6QRhJJbj7mx84Z49RuU",
  authDomain: "smartpet-b49c0.firebaseapp.com",
  projectId: "smartpet-b49c0",
  storageBucket: "smartpet-b49c0.firebasestorage.app",
  messagingSenderId: "327840402116",
  appId: "1:327840402116:web:64849d1c7bb7cff8fcd791",
  measurementId: "G-31B5938PX2"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
