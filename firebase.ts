// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDW7izS4yancW8Q0us-X7tyo7cHDS1C39g",
    authDomain: "netflix-clone-yt-7c312.firebaseapp.com",
    projectId: "netflix-clone-yt-7c312",
    storageBucket: "netflix-clone-yt-7c312.appspot.com",
    messagingSenderId: "176789672476",
    appId: "1:176789672476:web:ae40c82dd29239c66045d9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };