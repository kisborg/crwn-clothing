import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBSPJF3qowtaMvZOTl4uXpGBkL_Maq7AcI",
  authDomain: "crwn-db-ca2db.firebaseapp.com",
  projectId: "crwn-db-ca2db",
  storageBucket: "crwn-db-ca2db.appspot.com",
  messagingSenderId: "553584026092",
  appId: "1:553584026092:web:a12b2bd8aa8a3f38ab20c9",
  measurementId: "G-7V7YMT2DP1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);