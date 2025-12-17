import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {

  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    await axios.post("http://localhost:5000/users",formData).then((res)=>{
      alert("Registered Successfully")
      setTimeout(()=>{
        navigate("/")
      },500)
    })
  }


  return (
    <div>
      <h1>Register Page</h1>

      <input type="text" placeholder="Enter your name" name='name' onChange={handleChange} />
      <input type="text" placeholder="Enter your email" name='email' onChange={handleChange} />
      <input type="text" placeholder="Enter your password" name='password' onChange={handleChange} />

      <button onClick={handleSubmit}>Register</button>

      <Link to={"/"}>Login ? </Link>
    </div>
  )
}
