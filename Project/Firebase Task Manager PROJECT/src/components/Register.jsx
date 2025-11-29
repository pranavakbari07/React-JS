import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebaseConfig'
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
    await createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), formdata)
      navigate('/login')
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e7efff] via-[#f5f7ff] to-white flex flex-col items-center justify-center px-4 py-12 space-y-6">
      <div className="text-center space-y-2">
        <p className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0866ff] to-[#42b72a]">TaskBook</p>
        <p className="text-base md:text-lg text-gray-700 max-w-xl">Stay organized with a workspace that feels friendly and familiar. Plan tasks the same way you keep up with friends.</p>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-gradient-to-r from-[#d6e3ff] via-white to-[#d7f8e1] p-[2px] rounded-2xl shadow-xl">
          <div className="bg-white rounded-[18px] p-8 space-y-5">
            <div className="text-center space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-[#1877f2]">New here?</p>
              <h1 className="text-3xl font-semibold text-gray-900">Create a new account</h1>
              <p className="text-sm text-gray-500">It only takes a few seconds to get started.</p>
            </div>

            <div className="space-y-4">
              <input type="text" name="name" placeholder="Full name" onChange={handlechange} className="w-full px-4 py-3 bg-[#f6f8fc] border border-transparent rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1877f2]" />
              <input type="text" name="email" placeholder="Email address" onChange={handlechange} className="w-full px-4 py-3 bg-[#f6f8fc] border border-transparent rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1877f2]" />
              <input type="password" name="password" placeholder="New password" onChange={handlechange} className="w-full px-4 py-3 bg-[#f6f8fc] border border-transparent rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1877f2]" />
              <button onClick={handleRegister} className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#42b72a] to-[#35a820] cursor-pointer hover:opacity-90 transition-opacity">Sign Up</button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#1877f2] cursor-pointer font-semibold hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
