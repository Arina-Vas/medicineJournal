import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCr-Fl1Qm6y-oTYhleFH63_GdeC1AG9g2Q',
  authDomain: 'medicine-journal.firebaseapp.com',
  projectId: 'medicine-journal',
  storageBucket: 'medicine-journal.firebasestorage.app',
  messagingSenderId: '697237172151',
  appId: '1:697237172151:web:401bbcf608bb7aabc70232',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();

