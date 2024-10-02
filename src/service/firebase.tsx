import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAiulosfSqhNa6yaUixcqcuDfCODNF7NUA',
  authDomain: 'footprint-perfitt.firebaseapp.com',
  projectId: 'footprint-perfitt',
  storageBucket: 'footprint-perfitt.appspot.com',
  messagingSenderId: '689606025465',
  appId: '1:689606025465:web:c4ea29f994402302e18228',
  measurementId: 'G-JP446EJVVV',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // Cloud Firestore
