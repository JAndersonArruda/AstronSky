import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD1knZvbCKLOjb051LEVnfNSOxK91jm3KE",
    authDomain: "astronsky-dc4b4.firebaseapp.com",
    projectId: "astronsky-dc4b4",
    storageBucket: "astronsky-dc4b4.appspot.com",
    messagingSenderId: "123718147082",
    appId: "1:123718147082:web:e2f31c088875ee9247d3f3",
    measurementId: "G-FJ31NWR491"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);