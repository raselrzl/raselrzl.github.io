import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMbaMxWNnt7VPBeCsNkDBMS2uM67vORKA",
    authDomain: "crud-b8b63.firebaseapp.com",
    projectId: "crud-b8b63",
    storageBucket: "crud-b8b63.appspot.com",
    messagingSenderId: "297415534180",
    appId: "1:297415534180:web:23bcdacaa3522ba73ee171",
    measurementId: "G-YS6K35VW0L"
  };

  
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app)