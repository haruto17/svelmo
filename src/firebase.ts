import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxJh7gpRvM3t9IeAEW54CQDrs8ZcWxy9U",
  authDomain: "svelmo-b02f5.firebaseapp.com",
  projectId: "svelmo-b02f5",
  storageBucket: "svelmo-b02f5.appspot.com",
  messagingSenderId: "777852962977",
  appId: "1:777852962977:web:c76c4f86b510f4a9ea08e0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GithubAuthProvider();
export const db = getFirestore(app);
