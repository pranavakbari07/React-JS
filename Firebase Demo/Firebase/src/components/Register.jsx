import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db, provider } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function Register() {
  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    const res = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
    if (res && res.user && res.user.uid) {
      await setDoc(doc(db, 'users', res.user.uid), formdata)
      navigate('/')
    } else {
      alert('Error registering')
    }
  }

  const handleSignIn = async () => {
    const res = await signInWithPopup(auth, provider)
    if (res && res.user && res.user.uid) {
      console.log(res);
      await setDoc(doc(db, 'users', res.user.uid), {
        name: res.user.displayName,
        email: res.user.email,
      }, { merge: true })
      navigate('/deskboard')
    } else {
      alert('Error signing in with Google')
    }
  }

  return (
    <div>
      <h1>Register</h1> <br />
      <input type="text" name='name' placeholder='Enter your name' onChange={handlechange} />
      <input type="text" name='email' placeholder='Enter your email' onChange={handlechange} />
      <input type="text" name='password' placeholder='Enter your password' onChange={handlechange} /> <br /><br />
      <button onClick={handleRegister}>Register</button><br /><br />
      <Link to="/">Login</Link>

      <button onClick={handleSignIn}>Sign in With Google</button>
    </div>
  )
}
