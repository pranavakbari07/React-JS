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

  // Google Sign In
  const handleSignIn = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
      })
      navigate('/deskboard')
    })
  }

  return (
    <div className="h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 relative overflow-hidden flex flex-col">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Facebook-style Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm relative z-10 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                facebook
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 overflow-y-auto py-4">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[432px]">
              {/* Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 p-6 transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
                <div className="text-center mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-blue-600 mb-3 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Create a new account
                  </h2>
                  <p className="text-xs text-gray-600">It's quick and easy.</p>
                </div>
              
                <div className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    name="name" 
                    onChange={handlechange} 
                    placeholder="Full name" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 bg-white text-sm" 
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    type="number" 
                    name="age" 
                    onChange={handlechange} 
                    placeholder="Age" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 bg-white text-sm" 
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    name="email" 
                    onChange={handlechange} 
                    placeholder="Mobile number or email address" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 bg-white text-sm" 
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input 
                    type="password" 
                    name="password" 
                    onChange={handlechange} 
                    placeholder="New password" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 bg-white text-sm" 
                  />
                </div>

                {/* Sign Up Button */}
                <button 
                  onClick={handleRegister} 
                  className="w-full cursor-pointer py-3 rounded-lg text-white font-semibold text-base hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                  style={{ 
                    backgroundColor: '#42B72A',
                    backgroundImage: 'linear-gradient(135deg, #42B72A 0%, #36A420 100%)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Sign Up
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                {/* Google Sign-in */}
                <button 
                  onClick={handleSignIn} 
                  className="w-full cursor-pointer flex items-center justify-center gap-3 py-3 border-2 border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm bg-white group" 
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Sign in with Google</span>
                </button>
              </div>

                {/* Divider */}
                <div className="my-4 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">or</span>
                  </div>
                </div>

                {/* Login Link */}
                <p className="text-center text-xs">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold hover:underline transition-colors duration-200 inline-flex items-center gap-1 group" style={{ color: '#1877F2' }}>
                    <span>Log in</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
