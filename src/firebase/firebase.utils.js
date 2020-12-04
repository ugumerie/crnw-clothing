import firebase from 'firebase/app'
import 'firebase/firestore' // database
import 'firebase/auth' // for authorization


const config = {
    apiKey: "AIzaSyDVQIK3hFMt63siOEwa9WhvfJIpWIoDVIY",
    authDomain: "crnw-wears-db.firebaseapp.com",
    databaseURL: "https://crnw-wears-db.firebaseio.com",
    projectId: "crnw-wears-db",
    storageBucket: "crnw-wears-db.appspot.com",
    messagingSenderId: "720126337531",
    appId: "1:720126337531:web:412d680ac32a0e115eeb5e",
    measurementId: "G-TP2FX3CWVY"
};

 // Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//For google authentication
const provider = new firebase.auth.GoogleAuthProvider();

//triggers the google pop-up, when we use google auth provider for authentication and sign in
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

