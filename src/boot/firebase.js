import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp({ 
  apiKey: "AIzaSyDWeYTflMJJqrWHbHPuyNgetFN8o6asayc",
  authDomain: "cloudmoon-3c5d2.firebaseapp.com",
  projectId: "cloudmoon-3c5d2",
  storageBucket: "cloudmoon-3c5d2.appspot.com",
  messagingSenderId: "540432198582",
  appId: "1:540432198582:web:f79ac1686fd20ba113ef17",
  measurementId: "G-1TPQSBZYR2"
 });
 
let db = getFirestore(firebaseApp)
const analytics = getAnalytics(firebaseApp);
export default db