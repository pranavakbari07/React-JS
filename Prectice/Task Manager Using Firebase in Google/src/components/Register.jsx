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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-[432px]">
            {/* Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Create a new account</h2>
              <p className="text-sm text-gray-600 text-center mb-4">It's quick and easy.</p>
              
              <div className="space-y-3">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    onChange={handlechange} 
                    placeholder="Full name" 
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" 
                  />
                </div>
                
                <div>
                  <input 
                    type="number" 
                    name="age" 
                    onChange={handlechange} 
                    placeholder="Age" 
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" 
                  />
                </div>

                <div>
                  <input 
                    type="email" 
                    name="email" 
                    onChange={handlechange} 
                    placeholder="Mobile number or email address" 
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" 
                  />
                </div>

                <div>
                  <input 
                    type="password" 
                    name="password" 
                    onChange={handlechange} 
                    placeholder="New password" 
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" 
                  />
                </div>

                {/* Sign Up Button */}
                <button 
                  onClick={handleRegister} 
                  className="w-full cursor-pointer py-2.5 rounded-md text-white font-semibold text-lg hover:opacity-95 transition"
                  style={{ backgroundColor: '#42B72A' }}
                >
                  Sign Up
                </button>

                {/* Google Sign-in */}
                <button 
                  onClick={handleSignIn} 
                  className="w-full cursor-pointer flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium text-sm" 
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                  Sign in with Google
                </button>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-gray-300"></div>

              {/* Login Link */}
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold hover:underline" style={{ color: '#1877F2' }}>Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
