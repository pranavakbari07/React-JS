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
    await createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), formdata)
      navigate('/login')
    })
  }

  const handleSignIn = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
      })
      navigate('/home')
    })
  }

  return (
    <div className="min-h-screen bg-[#FFFDE7] flex flex-col">

      {/* Blinkit Header */}
      <header className="bg-white border-b shadow-sm py-4 px-6">
        <h1 className="text-3xl font-extrabold text-black">blinkit</h1>
      </header>

      {/* Main Content */}
      <div className="flex justify-center items-center flex-grow px-4 py-8">
        <div className="w-full max-w-sm">

          {/* Register Card */}
          <div className="bg-white p-7 rounded-2xl shadow-md border">

            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Create Account
            </h2>

            <p className="text-center text-gray-500 text-sm">
              Fast delivery needs fast signup 😄
            </p>

            <div className="space-y-4 mt-6">

              {/* Name */}
              <input
                type="text"
                name="name"
                onChange={handlechange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F7CA02] outline-none"
              />

              {/* Age */}
              <input
                type="number"
                name="age"
                onChange={handlechange}
                placeholder="Age"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F7CA02] outline-none"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                onChange={handlechange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F7CA02] outline-none"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                onChange={handlechange}
                placeholder="New Password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F7CA02] outline-none"
              />

              {/* Sign Up Button */}
              <button
                onClick={handleRegister}
                className="w-full py-3 rounded-lg font-semibold bg-[#2A8703] text-white hover:bg-[#256f03] transition shadow-md"
              >
                Sign Up
              </button>

              {/* Google Sign-in */}
              <button
                onClick={handleSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg bg-white hover:bg-gray-50 transition shadow-sm"
              >
                <img
                  src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Sign in with Google</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#2A8703] hover:underline"
                >
                  Log in
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
