import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export default function Register() {
    const [formdata,setFormdata] = useState({})
    const navigate = useNavigate()

    const handlechange = (e)=>{
        setFormdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const handleRegister = async()=>{
        await createUserWithEmailAndPassword(auth,formdata.email,formdata.password).then((res)=>{
            navigate('/')
        })
    }

  return (
    <div>
      <h1>Register</h1>
      <input type="text" name='name' placeholder='Enter your name' onChange={handlechange} />
      <input type="text" name='email' placeholder='Enter your email' onChange={handlechange} />
      <input type="text" name='password' placeholder='Enter your password' onChange={handlechange} /> <br /><br />
      <button onClick={handleRegister}>Register</button><br /><br />
      <Link to="/">Login</Link>
    </div>
  )
}
