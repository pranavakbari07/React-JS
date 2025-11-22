import React, { useState } from 'react'
import { auth, db } from '../../firebaseconfig'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {

  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      // Save user data to Firestore
      await setDoc(doc(db, "Users", res.user.uid), formdata)
      // Create empty cart for new user in Firestore
      await setDoc(doc(db, "Carts", res.user.uid), {
        items: [],
        createdAt: new Date().toISOString()
      })
      navigate("/login")
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    <div>
      {/* <h1>Register</h1>
      <form>
        <input type="text" name='name' placeholder='Enter your name' onChange={handleChange} />
        <input type="text" name='email' placeholder='Enter your email' onChange={handleChange} />
        <input type="text" name='password' placeholder='Enter your password' onChange={handleChange} /><br /><br />
        <button type='submit' onClick={handleRegister}>Register</button><br /><br />
        <Link to="/login">Login</Link>
      </form> */}
      <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #000000 100%)'
        }}>
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-black opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-black opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-black opacity-5 rounded-full blur-3xl"></div>

        <div className="bg-white/95 backdrop-blur-sm w-full max-w-md p-10 rounded-2xl shadow-2xl border-2 border-black/20 relative z-10">
          {/* Logo/Brand section */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <h1 className="text-5xl font-bold text-black mb-3 tracking-tight">
                Register
              </h1>
              <span className="inline-block w-20 h-1 bg-black rounded-full"></span>
            </div>
            <p className="text-gray-600 text-sm mt-4">Join Black Mamba Jewellery</p>
          </div>

          <form className="space-y-5">

            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition bg-white/90"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition bg-white/90"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition bg-white/90"
              />
            </div>

            <button
              type="submit"
              onClick={handleRegister}
              className="w-full py-3.5 bg-black text-white cursor-pointer rounded-lg font-semibold hover:bg-gray-900 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Register
            </button>

            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-black cursor-pointer font-semibold hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
