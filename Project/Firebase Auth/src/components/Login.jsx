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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Facebook-style Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
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
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <div className="w-full max-w-[396px]">
            {/* Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 p-8 transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Log in to Facebook
                </h2>
                <p className="text-sm text-gray-500">Welcome back! Please enter your details.</p>
              </div>
              
              <div className="space-y-5 mt-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    name="email" 
                    onChange={handlechange} 
                    placeholder="Email address or phone number" 
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 bg-white" 
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
                    placeholder="Password" 
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 bg-white" 
                  />
                </div>

                {/* Log In Button */}
                <button 
                  onClick={handleLogin} 
                  className="w-full py-4 cursor-pointer rounded-lg text-white font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                  style={{ 
                    backgroundColor: '#1877F2',
                    backgroundImage: 'linear-gradient(135deg, #1877F2 0%, #4267B2 100%)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Log In
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                <div className="text-center py-2">
                  <Link 
                    to="/" 
                    className="text-sm font-medium hover:underline transition-colors duration-200 inline-flex items-center gap-1 group"
                    style={{ color: '#1877F2' }}
                  >
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Forgotten password?
                  </Link>
                </div>

                {/* Divider */}
                <div className="my-6 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">or</span>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <Link 
                    to="/" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                    style={{ 
                      backgroundColor: '#42B72A',
                      backgroundImage: 'linear-gradient(135deg, #42B72A 0%, #36A420 100%)',
                      color: 'white' 
                    }}
                  >
                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create new account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
