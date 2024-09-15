// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBhYsXmdiMe_urCLF0TtmWVKd5Dbczn1PI',
  authDomain: 'perfit-footprint.firebaseapp.com',
  projectId: 'perfit-footprint',
  storageBucket: 'perfit-footprint.appspot.com',
  messagingSenderId: '105583072489',
  appId: '1:105583072489:web:da3e813bd0ef7be9c8cc78',
  measurementId: 'G-19D2PLYCBE',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
