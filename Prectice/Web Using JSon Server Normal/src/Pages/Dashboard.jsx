import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    let status = localStorage.getItem("auth")
    if (!status) {
      navigate('/')
    }
  })
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
