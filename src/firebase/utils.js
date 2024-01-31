// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB21PQVw_JPk4UYdc90zYFKMNOm6NG5VN8",
  authDomain: "no-cotine.firebaseapp.com",
  projectId: "no-cotine",
  storageBucket: "no-cotine.appspot.com",
  messagingSenderId: "843463383555",
  appId: "1:843463383555:web:ee978c8064697cbffd4c36",
  measurementId: "G-5FKQ1NCMMZ"
};


const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);