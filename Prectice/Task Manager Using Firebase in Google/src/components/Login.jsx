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
    <div className="min-h-screen bg-gray-100">
      {/* Facebook-style Header */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold" style={{ color: '#1877F2' }}>facebook</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <div className="w-full max-w-[396px]">
            {/* Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6">
              <h2 className="text-2xl font-bold mb-2 text-center">Log in to Facebook</h2>
              
              <div className="space-y-3 mt-6">
                <div>
                  <input 
                    type="text" 
                    name="email" 
                    onChange={handlechange} 
                    placeholder="Email address or phone number" 
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" 
                  />
                </div>
                
                <div>
                  <input 
                    type="password" 
                    name="password" 
                    onChange={handlechange} 
                    placeholder="Password" 
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" 
                  />
                </div>

                {/* Log In Button */}
                <button 
                  onClick={handleLogin} 
                  className="w-full py-2.5 cursor-pointer rounded-md text-white font-semibold text-lg hover:opacity-95 transition"
                  style={{ backgroundColor: '#1877F2' }}
                >
                  Log In
                </button>

                <div className="text-center py-2">
                  <Link to="/" className="text-sm hover:underline" style={{ color: '#1877F2' }}>
                    Forgotten password?
                  </Link>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-300"></div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <Link 
                    to="/" 
                    className="inline-block px-4 py-2.5 rounded-md font-semibold text-sm hover:opacity-95 transition"
                    style={{ backgroundColor: '#42B72A', color: 'white' }}
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
