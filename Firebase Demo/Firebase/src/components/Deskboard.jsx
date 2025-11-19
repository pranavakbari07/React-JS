import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Deskboard() {

  const [userId,setUserId] = useState(null)
  const [userData,setUserData] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUserId(user.uid)
    })
  },[])

  useEffect(()=>{
    if(userId){
      fetchuser()
    }
  },[userId])   


  const fetchuser = async()=>{
    await getDoc(doc(db,'users',userId)).then((res)=>{
      setUserData(res.data())
    })
  }


  const handlelogout = async ()=>{
    await auth.signOut()
    navigate("/")
  }

  return (
    <div>
      <h1>Deskboard</h1>

      <h1>{userData && userData}</h1>
      <button onClick={handlelogout}>Log Out</button>

    </div>
  )
}
