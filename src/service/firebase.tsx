import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFEOXNvNOZ04zMxr5ewwzWfREfXJ_MTa0',
  authDomain: 'perfitt-project.firebaseapp.com',
  projectId: 'perfitt-project',
  storageBucket: 'perfitt-project.appspot.com',
  messagingSenderId: '31544047716',
  appId: '1:31544047716:web:d8373be651f8dec93fc771',
  measurementId: 'G-57ZNE5Y5TD',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // Cloud Firestore
