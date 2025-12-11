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
    await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then(() => navigate('/home'))
  }

  return (
    <div className="min-h-screen bg-[#FFFDE7] flex flex-col">

      {/* Simple Blinkit Header */}
      <header className="bg-white border-b shadow-sm py-4 px-6">
        <h1 className="text-3xl font-extrabold text-black">blinkit</h1>
      </header>

      {/* Main Content */}
      <div className="flex justify-center items-center flex-grow px-4">
        <div className="w-full max-w-sm">

          {/* Simple Card */}
          <div className="bg-white p-7 rounded-2xl shadow-md border">

            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Login
            </h2>

            <p className="text-center text-gray-500 text-sm">
              Get your groceries delivered fast!
            </p>

            <div className="space-y-4 mt-6">

              {/* Email */}
              <input
                type="text"
                name="email"
                onChange={handlechange}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F7CA02] outline-none"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                onChange={handlechange}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F7CA02] outline-none"
              />

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full py-3 rounded-lg font-semibold bg-[#F7CA02] hover:bg-[#e2b703] text-black transition"
              >
                Login
              </button>

              {/* Forgot password */}
              <div className="text-center">
                <Link
                  to="/"
                  className="text-sm text-[#2A8703] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Create Account */}
              <div className="text-center">
                <Link
                  to="/"
                  className="inline-block px-5 py-3 rounded-lg bg-[#2A8703] text-white font-semibold hover:bg-[#256f03] transition"
                >
                  Create new account
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
