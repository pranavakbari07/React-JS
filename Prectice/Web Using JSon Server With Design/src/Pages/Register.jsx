import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function Register() {

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
    await axios.post("http://localhost:5000/users", formData).then(() => {

      setSuccess(true)

      setTimeout(() => {
        navigate("/")
      }, 1500)
    })

    setFormData({
      name: "",
      email: "",
      password: ""
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
            className="fixed inset-0 z-50 flex items-center justify-center
              bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl font-serif tracking-widest text-[#d4af37] mb-4">
                AURUM
              </h1>
              <p className="text-gray-300 text-sm tracking-widest uppercase">
                Account Created Successfully
              </p>

              <div className="mt-6 w-12 h-12 mx-auto rounded-full border-2
                border-[#d4af37] border-t-transparent animate-spin"></div>
            </motion.div>
          </motiondiv>
        )}
      </AnimatePresence>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#141414] to-[#0b0b0b] px-4">

        <div className="w-full max-w-md bg-[#111] border border-[#2a2a2a]
          rounded-2xl p-10
          shadow-[0_25px_70px_rgba(0,0,0,0.7)]
          transition-all duration-500">

          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif tracking-widest text-[#d4af37]">
              AURUM
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Create Your Luxury Account
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600
              text-gray-200 py-2 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600
              text-gray-200 py-2 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div className="mb-8">
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
              Password
            </label>
            <input
              type="text"
              name="password"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600
              text-gray-200 py-2 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-[#d4af37] text-black cursor-pointer
            text-sm font-semibold uppercase tracking-widest rounded-md
            hover:bg-[#e6c75a] transition-all duration-300"
          >
            Create Account
          </button>

          <p className="text-center text-xs text-gray-400 mt-8">
            Already have an account?{" "}
            <Link to="/" className="text-[#d4af37] hover:underline">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </>
  )
}
