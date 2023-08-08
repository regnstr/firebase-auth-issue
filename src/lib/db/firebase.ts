// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // PASTE CONFIG HERE
    // PASTE CONFIG HERE
    // PASTE CONFIG HERE
    // PASTE CONFIG HERE
    // PASTE CONFIG HERE
    // PASTE CONFIG HERE
};

function createFirebaseApp() {
    try {
        return getApp();
    } catch {
        return initializeApp(firebaseConfig);
    }
}

// Initialize Firebase
export const app = createFirebaseApp();
export const auth = getAuth(app);
export const db = getFirestore(app);