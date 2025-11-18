import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export default function Login() {
        const [formdata,setFormdata] = useState({})
    const navigate = useNavigate()

    const handlechange = (e)=>{
        setFormdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const handleLogin = async()=>{
        await signInWithEmailAndPassword(auth,formdata.email,formdata.password).then((res)=>{
            navigate('/deskboard')
        })
    }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" name='email' placeholder='Enter your email' onChange={handlechange} />
      <input type="text" name='password' placeholder='Enter your password' onChange={handlechange} /> <br /><br />
      <button onClick={handleLogin}>Login</button><br /><br />
      <Link to="/register">Register</Link>
    </div>
  )
}
