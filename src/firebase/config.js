import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL3kMG5VOrOFlY0NOUdYMbaOs2ewLSLXE",
  authDomain: "devathon-43d63.firebaseapp.com",
  projectId: "devathon-43d63",
  storageBucket: "devathon-43d63.appspot.com",
  messagingSenderId: "928849736774",
  appId: "1:928849736774:web:372da6e3b628b978e08647",
  measurementId: "G-PQ1E4H9ZKD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export {
  getAuth,
  createUserWithEmailAndPassword ,
  auth,
  app,
  signInWithEmailAndPassword


}