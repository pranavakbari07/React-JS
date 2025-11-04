import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  const data = useLocation()
  console.log(data);
  
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/about"}>Go to About Page</Link>
      
    </div>
  )
}
