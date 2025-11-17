import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export default function Login() {
  const [formdata, setFormdata] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async () => {
    try {
      if (!formdata.email || !formdata.password) {
        alert('Please enter email and password')
        return
      }

      const res = await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      console.log('Login success:', res.user)
      navigate('/deskboard')
    } catch (error) {
      console.error('Login error:', error)
      alert(error.message)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" name='email' placeholder='Enter your email' onChange={handlechange} />
      <input type="password" name='password' placeholder='Enter your password' onChange={handlechange} /> <br /><br />
      <button onClick={handleLogin}>Login</button><br /><br />
      <Link to="/register">Register</Link>
    </div>
  )
}
