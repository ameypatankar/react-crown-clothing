import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCxTz0qWrL-RVC1649Ka8bDu5fYfE7u7_w",
    authDomain: "crwn-db-b5793.firebaseapp.com",
    databaseURL: "https://crwn-db-b5793.firebaseio.com",
    projectId: "crwn-db-b5793",
    storageBucket: "crwn-db-b5793.appspot.com",
    messagingSenderId: "279000355914",
    appId: "1:279000355914:web:d8853395777b0938d442b3"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;