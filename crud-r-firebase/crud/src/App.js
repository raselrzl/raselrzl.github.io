import './App.css';
import { useState, useEffect } from 'react'
import {db} from './firebase-config'
import { collection, getDocs } from 'firebase/firestore' 

function App() {
  const[users, setUsers] = useState([]);
  const userCollectionRef = collection(db, 'users')


  useEffect(() => {
    const getUsers= async()=>{
         const data=await getDocs(userCollectionRef);
         console.log(data)
         setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }
   getUsers()
  }, [ ])

  
  return (
    <div className="App">
     
      {users.map((user)=>{
        return(
          <div>
            <h1> Name:{user.name}</h1>
            <p>Age:{user.age}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
