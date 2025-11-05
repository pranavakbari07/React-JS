import axios from 'axios'
import React, { useState } from 'react'

export default function ApiCrud() {

    const [formdata, setFormdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e)=>{
        setFormdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/users",formdata).then((res)=>{
            setFormdata({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                gender: ''
            })
            alert('Account created successfully!')
        })
        
    }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md"> 
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">facebook</h1>
            <p className="text-gray-600 text-base">Create a new account</p>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input 
                  type="text" 
                  placeholder="First name" 
                  value={formdata.firstName} 
                  name='firstName' 
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Surname" 
                  value={formdata.lastName} 
                  name='lastName' 
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            <div>
              <input 
                type="text" 
                placeholder="Mobile number or email address" 
                value={formdata.email} 
                name='email' 
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm"
              />
            </div>

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="New password" 
                value={formdata.password} 
                name='password' 
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">Gender</label>
              <div className="grid grid-cols-3 gap-2">
                <label className="flex items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    checked={formdata.gender === 'Female'}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  <span className="text-sm">Female</span>
                </label>
                <label className="flex items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    checked={formdata.gender === 'Male'}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  <span className="text-sm">Male</span>
                </label>
                <label className="flex items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Custom" 
                    checked={formdata.gender === 'Custom'}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  <span className="text-sm">Custom</span>
                </label>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              People who use our service may have uploaded your contact information to Facebook. <span className="text-blue-600 hover:underline cursor-pointer">Learn more</span>.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              By clicking Sign Up, you agree to our <span className="text-blue-600 hover:underline cursor-pointer">Terms</span>, <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span> and <span className="text-blue-600 hover:underline cursor-pointer">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
            </p>
            
            <div className="pt-2">
              <button 
                type='submit'
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-md transition duration-200 text-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
