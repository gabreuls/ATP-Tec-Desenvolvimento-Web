import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGz8nNAkac2ISTSIw-mdBNohsZc-MkAXk",
  authDomain: "projetoatpweb.firebaseapp.com",
  projectId: "projetoatpweb",
  storageBucket: "projetoatpweb.firebasestorage.app",
  messagingSenderId: "29606948821",
  appId: "1:29606948821:web:7ee92a841b2ece7a1a575c"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;