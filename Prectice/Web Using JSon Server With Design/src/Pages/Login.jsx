import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function Login() {

  const [formData, setFormData] = useState({})
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    await axios.get("http://localhost:5000/users").then((res) => {
      const user = res.data.find((item) => item.email == formData.email)

      if (!user) return alert("User not found")

      if (user.password == formData.password) {
        localStorage.setItem("auth", true)
        setSuccess(true)

        setTimeout(() => {
          navigate("/dashboard")
        }, 1500)

      } else {
        alert("Your password is incorrect")
      }
    })
  }

  return (
    <>
      <AnimatePresence>
        {success && (
          <motiondiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          >
            <motiondiv
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl font-serif tracking-widest text-[#d4af37] mb-4">
                AURUM
              </h1>
              <p className="text-gray-300 text-sm tracking-widest uppercase">
                Login Successful
              </p>

              <div className="mt-6 w-12 h-12 mx-auto rounded-full border-2
                border-[#d4af37] border-t-transparent animate-spin"></div>
            </motiondiv>
          </motiondiv>
        )}
      </AnimatePresence>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#141414] to-[#0b0b0b] px-4">

        <div className="w-full max-w-md bg-[#111] border border-[#2a2a2a] rounded-2xl p-10">
          <h1 className="text-center text-3xl font-serif tracking-widest text-[#d4af37] mb-10">
            AURUM
          </h1>

          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full mb-6 bg-transparent border-b border-gray-600 text-gray-200 py-2 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full mb-8 bg-transparent border-b border-gray-600 text-gray-200 py-2 focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-[#d4af37] text-black uppercase tracking-widest font-semibold rounded-md cursor-pointer"
          >
            Sign In
          </button>

          <p className="text-center text-xs text-gray-400 mt-8 cursor-pointer">
            New here? <Link to="/register" className="text-[#d4af37]">Create Account</Link>
          </p>
        </div>
      </div>
    </>
  )
}
