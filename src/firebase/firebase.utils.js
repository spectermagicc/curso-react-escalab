import firebase, {} from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCW9_AY1l2ARezXPa8SBbgqfyQs2-iePEA",
    authDomain: "proyecto-1-reactjs-a9c4e.firebaseapp.com",
    projectId: "proyecto-1-reactjs-a9c4e",
    storageBucket: "proyecto-1-reactjs-a9c4e.appspot.com",
    messagingSenderId: "382711707860",
    appId: "1:382711707860:web:56259444cdc5ed2392a341"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth)
        return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData // express operator...
            });

        } catch (error) {
            console.log('error creating urer', error.menssage);
        }
    }

    return userAuth;
}

export const auth = firebase.auth(); //todo lo que tenga que ver con autenticación

export const firestore = firebase.firestore(); //todo lo que tenga que ver con ref. a la bd, apuntar a doc

//config provider

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;