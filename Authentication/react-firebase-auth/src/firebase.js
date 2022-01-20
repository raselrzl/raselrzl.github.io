import { initializeApp } from 'firebase/app' 
import { getAuth } from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyCkbV3rRM4u2C8Elor20b2Ioo-XsflfpkY",
  authDomain: "auth-dev-fc336.firebaseapp.com",
  projectId: "auth-dev-fc336",
  storageBucket: "auth-dev-fc336.appspot.com",
  messagingSenderId: "951504109934",
  appId: "1:951504109934:web:653f800de289407557c17f"
})

export const auth = getAuth(app)
export default app