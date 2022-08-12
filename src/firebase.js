import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCpc9kxDPBLYGeGfbRfUxY6O-495Kmg1rA",
  authDomain: "chuks--clone-a8bc0.firebaseapp.com",
  projectId: "chuks--clone-a8bc0",
  storageBucket: "chuks--clone-a8bc0.appspot.com",
  messagingSenderId: "503091830288",
  appId: "1:503091830288:web:f9c023a16c6cc89af6f495"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export {db, auth, provider};
