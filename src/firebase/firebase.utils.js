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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    
    const batch = firestore.batch(); //creates document in batches and fails if a docment fails to set
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        
        batch.set(newDocRef, obj);
    })

    //return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollections.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})
}

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


