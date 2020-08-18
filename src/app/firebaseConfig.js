import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

export var firebaseConfig = {
    apiKey: "AIzaSyAQGjc9dVN7dNKj_-FoY10YtRlrcBEDy8U",
    authDomain: "psikotest-rumah-hijau.firebaseapp.com",
    databaseURL: "https://psikotest-rumah-hijau.firebaseio.com",
    projectId: "psikotest-rumah-hijau",
    storageBucket: "psikotest-rumah-hijau.appspot.com",
    messagingSenderId: "595853838007",
    appId: "1:595853838007:web:340795ffab15b986016f32",
    measurementId: "G-NTBLJG8KYN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;