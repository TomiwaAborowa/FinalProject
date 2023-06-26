// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZTbetQhFLDPPpYLuR4rp63bY-XT0hzzY",
  authDomain: "my-url-shortner-7b79c.firebaseapp.com",
  projectId: "my-url-shortner-7b79c",
  storageBucket: "my-url-shortner-7b79c.appspot.com",
  messagingSenderId: "239567021713",
  appId: "1:239567021713:web:e5f8c8ab36740431b38130",
  measurementId: "G-RLVZX6QJD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);