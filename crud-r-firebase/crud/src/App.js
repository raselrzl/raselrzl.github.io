import './App.css';
import { useState, useEffect } from 'react'
import {db} from './firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore' 

function App() {
  const [newName, setNewName]=useState("")
  const [newAge, setNewAge]=useState(0)

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

  
  const createUser=async()=>{
      await addDoc(userCollectionRef, { name: newName, age: Number(newAge)})
  }

  const updateUser=async(id,age)=>{
      const userDoc=doc(db, "users", id)
      const newFields={age:age+1}
      await updateDoc(userDoc, newFields)
  }

  const deleteUser=async(id)=>{
      const userDoc=doc(db, 'users', id)
      await deleteDoc(userDoc)
  }

  return (
    <div className="App">
       <input placeholder='Name...'  onChange={ (e)=>{setNewName(e.target.value)}}></input>
       <input placeholder='Age...' type="number" onChange={ (e)=>{setNewAge(e.target.value)}}></input>
       <button onClick={createUser}>Create User</button>

      {users.map((user)=>{
        return(
          <div>
            <h1> Name:{user.name}</h1>
            <p>Age:{user.age}</p>
            <button onClick={()=>updateUser(user.id, user.age)}>Increase Age</button>
            <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
          </div>
        )
      })}


    </div>
  );
}

export default App;
