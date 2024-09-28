// firebaseの基本設定
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDwqCDiMaf3VZijw9i5OIlku97qWG3KQX8",
    authDomain: "apppractise-6a570.firebaseapp.com",
    projectId: "apppractise-6a570",
    storageBucket: "apppractise-6a570.appspot.com",
    messagingSenderId: "244311954810",
    appId: "1:244311954810:web:c3229a19443f7fda6db2c3"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, db, provider };

