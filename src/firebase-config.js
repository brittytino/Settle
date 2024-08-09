import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDSmVdCBtCb5jwdFThnn1xUzWnfw50lZ6k",
  authDomain: "settle-kgcas.firebaseapp.com",
  projectId: "settle-kgcas",
  storageBucket: "settle-kgcas.appspot.com",
  messagingSenderId: "534066641792",
  appId: "1:534066641792:web:d24c1157ad8e8b94f81f65",
  measurementId: "G-4R7JDY5WPQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
