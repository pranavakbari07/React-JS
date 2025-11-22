import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseconfig'

export default function Login() {
  const [formdata, setFormdata] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      navigate('/deshboard')
    } catch (error) {
      console.error('Unable to sign in', error)
    }
  }

  return (
    <div>
      {/* <h1>Login</h1>
      <form>
        <input type="text" name='email' placeholder='Enter your email' onChange={handleChange} />
        <input type="text" name='password' placeholder='Enter your password' onChange={handleChange} /><br /><br />
        <button onClick={handleLogin}>Login</button><br /><br />
        <Link to="/register">Register</Link>
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
                Login
              </h1>
              <span className="inline-block w-20 h-1 bg-black rounded-full"></span>
            </div>
            <p className="text-gray-600 text-sm mt-4">Welcome back to Black Mamba</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>

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
              className="w-full py-3.5 bg-black text-white cursor-pointer rounded-lg font-semibold hover:bg-gray-900 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Login
            </button>

            <p className="text-center text-gray-600 text-sm mt-6">
              Don't have an account?{" "}
              <Link to="/" className="text-black cursor-pointer font-semibold hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  )
}
