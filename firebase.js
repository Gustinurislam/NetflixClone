import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAjIM5c7qU1BeXiqUWoMHb2jJbuIZjgEE8',
  authDomain: 'netflix-clone-108a6.firebaseapp.com',
  projectId: 'netflix-clone-108a6',
  storageBucket: 'netflix-clone-108a6.appspot.com',
  messagingSenderId: '357654727312',
  appId: '1:357654727312:web:18792367cf815bdf9e6615',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
