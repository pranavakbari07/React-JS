import React, { useState } from 'react'
import Nav from './Components/Nav'
import Loader from './Components/Loader'

export default function App() {

  const [dark,setDark] = useState(false)
  return (
    <div>
      {/* <Nav dark={dark} setDark={setDark}/> */}
      <Loader/>
      
    </div>
  )
}
