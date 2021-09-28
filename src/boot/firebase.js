import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp({ 
  apiKey: "ENTER YOUR KEY",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
 });
 
let db = getFirestore(firebaseApp)
const analytics = getAnalytics(firebaseApp);
export default db
