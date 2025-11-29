import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export default function Login() {
  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      navigate('/deskboard')
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e7efff] via-[#f5f7ff] to-white flex flex-col items-center justify-center px-4 py-12 space-y-6">
      <div className="text-center space-y-2">
        <p className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0866ff] to-[#42b72a]">TaskBook</p>
        <p className="text-base md:text-lg text-gray-700 max-w-xl">Jump back into your task flow with the same friendly space.</p>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-gradient-to-r from-[#d6e3ff] via-white to-[#d7f8e1] p-[2px] rounded-2xl shadow-xl">
          <div className="bg-white rounded-[18px] p-8 space-y-5">
            <div className="text-center space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[#1877f2]">Welcome back</p>
              <h1 className="text-3xl font-semibold text-gray-900">Log in to continue</h1>
            </div>

            <div className="space-y-4">
              <input type="text" name="email" placeholder="Email address" onChange={handlechange} className="w-full px-4 py-3 bg-[#f6f8fc] border border-transparent rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1877f2]"/>
              <input type="password" name="password" placeholder="Password" onChange={handlechange} className="w-full px-4 py-3 bg-[#f6f8fc] border border-transparent rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1877f2]" />
              <button onClick={handleLogin} className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1877f2] to-[#166fe5] cursor-pointer hover:opacity-95 transition-opacity">Log In</button>
            </div>

            <div className="border-t border-gray-100" />

            <button onClick={() => navigate('/')} className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#42b72a] to-[#35a820] cursor-pointer hover:opacity-95 transition-opacity">Create new account</button>
            <p className="text-center text-sm text-gray-600">
              Need a different account?{" "}
              <Link to="/" className="text-[#1877f2] cursor-pointer font-semibold hover:underline">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
