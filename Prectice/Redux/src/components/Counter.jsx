import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incremet } from '../feature/CounterSlice'

export default function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.CounterKey.Count)

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-10 text-center w-80 border border-white/50">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Counter</h1>
        <div className="text-6xl font-bold text-indigo-600 mb-8">{count}</div>
        <div className="flex justify-center gap-6">
          <button onClick={() => dispatch(decrement())} className="bg-red-400 hover:bg-red-500 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200" >-</button>
          <button onClick={() => dispatch(incremet())} className="bg-green-400 hover:bg-green-500 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200" >+</button>
        </div>
      </div>
    </div>
  )
}
