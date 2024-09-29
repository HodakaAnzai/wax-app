import { initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_APP_ID as string,
};

// Firebase アプリの初期化
const app = initializeApp(firebaseConfig);

// Firebase Authentication の初期化
const auth: Auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore データベースの初期化
const db: Firestore = getFirestore(app);

export { auth, db, provider };



