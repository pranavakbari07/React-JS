import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    await axios.get("http://localhost:5000/users",).then((res=>{
      const user = res.data.find((user)=> user.email === formData.email)
      if(!user){
       return alert("User not found")
      }
      if(user.password == formData.password){
        alert("Login Successful")
        localStorage.setItem("auth",true)
        setTimeout(()=>{
          navigate("/dashboard")
        },500)
      }else{
        alert("Invalid password")
      }
    }))
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Enter your email" name='email' onChange={handleChange} />
      <input type="text" placeholder="Enter your password" name='password' onChange={handleChange} />

      <button onClick={handleSubmit}>Register</button>

      <Link to={"/register"}>Register ?</Link>

    </div>
  )
}
