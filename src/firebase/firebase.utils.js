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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);