import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBHO728jTf97vZjdvQDzOBAXaK0e4vcG0",
    authDomain: "clone-93608.firebaseapp.com",
    projectId: "clone-93608",
    storageBucket: "clone-93608.appspot.com",
    messagingSenderId: "792804306742",
    appId: "1:792804306742:web:55af19d976cd6e48f50d97",
    measurementId: "G-DN31K2NCHG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();//fire store is the database of firebase
const auth = firebase.auth();

export { db, auth };
