import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDq_zs7ZHX2mgXwSyC8ZfYtRYeljxhREYc",
    authDomain: "restaurantapp-b2584.firebaseapp.com",
    databaseURL: "https://restaurantapp-b2584-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-b2584",
    storageBucket: "restaurantapp-b2584.appspot.com",
    messagingSenderId: "772924783834",
    appId: "1:772924783834:web:ef0107f1cc364a2aabf9e3",
    measurementId: "G-EEHZ2BF5GP"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const storage = getStorage(app);


export {
    app,
    fireStore,
    storage
}
