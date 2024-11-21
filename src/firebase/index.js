// firebase.ts or firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { initializeAuth } from 'firebase/auth';

// Your Firebase config
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
  databaseURL: process.env.databaseURL,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize other Firebase services
const database = getDatabase(app);
const auth = initializeAuth(app);

const storage = getStorage(app)
export { app, database, auth, storage };
