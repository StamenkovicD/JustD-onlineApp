import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-uekE7lkhbWhQKSpt63ptQhJ7AsXygCM",
    authDomain: "justd-db.firebaseapp.com",
    projectId: "justd-db",
    storageBucket: "justd-db.appspot.com",
    messagingSenderId: "848628357510",
    appId: "1:848628357510:web:0b41da5587fe0b5c9f7407",
    measurementId: "G-0EV5KHB035"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;