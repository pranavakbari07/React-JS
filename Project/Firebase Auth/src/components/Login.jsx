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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Facebook-style Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
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
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <div className="w-full max-w-[396px]">
            {/* Card */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 transform transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Log in to Facebook
              </h2>
              
              <div className="space-y-4 mt-6">
                <div>
                  <input 
                    type="text" 
                    name="email" 
                    onChange={handlechange} 
                    placeholder="Email address or phone number" 
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-gray-300" 
                  />
                </div>
                
                <div>
                  <input 
                    type="password" 
                    name="password" 
                    onChange={handlechange} 
                    placeholder="Password" 
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 transition-all duration-300 hover:border-gray-300" 
                  />
                </div>

                {/* Log In Button */}
                <button 
                  onClick={handleLogin} 
                  className="w-full py-3.5 cursor-pointer rounded-lg text-white font-semibold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  style={{ 
                    backgroundColor: '#1877F2',
                    backgroundImage: 'linear-gradient(135deg, #1877F2 0%, #4267B2 100%)'
                  }}
                >
                  Log In
                </button>

                <div className="text-center py-2">
                  <Link 
                    to="/" 
                    className="text-sm font-medium hover:underline transition-colors duration-200"
                    style={{ color: '#1877F2' }}
                  >
                    Forgotten password?
                  </Link>
                </div>

                {/* Divider */}
                <div className="my-6 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or</span>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <Link 
                    to="/" 
                    className="inline-block px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#42B72A',
                      backgroundImage: 'linear-gradient(135deg, #42B72A 0%, #36A420 100%)',
                      color: 'white' 
                    }}
                  >
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
