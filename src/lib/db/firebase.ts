// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, inMemoryPersistence, browserSessionPersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // PASTE FIREBASE CONFIG HERE
    // PASTE FIREBASE CONFIG HERE
    // PASTE FIREBASE CONFIG HERE
    // PASTE FIREBASE CONFIG HERE
    // PASTE FIREBASE CONFIG HERE
    // PASTE FIREBASE CONFIG HERE
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

// auth.setPersistence(browserSessionPersistence);

export const db = getFirestore(app);
// export const analytics = getAnalytics(app);