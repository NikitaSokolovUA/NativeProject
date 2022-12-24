import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDcE1t9bjBqbaIJhyNwlNhYB7758pLMuY4',
  authDomain: 'nativeproject-42d21.firebaseapp.com',
  projectId: 'nativeproject-42d21',
  storageBucket: 'nativeproject-42d21.appspot.com',
  messagingSenderId: '14043611511',
  appId: '1:14043611511:web:c2886fc10050d56199a172',
  measurementId: 'G-7WXVDXYW08',
  databaseURL: 'https://nativeproject-42d21-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
