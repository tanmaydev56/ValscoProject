// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpX7VUC5Lve1kpU64L6erUyp9MPhT_DgA",
  authDomain: "newproj-c44e3.firebaseapp.com",
  projectId: "newproj-c44e3",
  storageBucket: "newproj-c44e3.appspot.com",
  messagingSenderId: "427466009438",
  appId: "1:427466009438:web:ca0f1162bbecac6b9ebdcf",
  measurementId: "G-EEZ3YQYH7K",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

export const createDoc = async ({ name, email, number, company }) => {
  const createdAt = new Date();
  const userDocRef = doc(collection(db, "contacts"));

  await setDoc(userDocRef, {
    createdAt,
    name,
    email,
    number,
    company,
  });
};
