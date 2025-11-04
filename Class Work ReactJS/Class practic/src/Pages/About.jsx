import React from 'react'
import { replace, useNavigate, useParams } from 'react-router-dom'

export default function About() {

    const navigate = useNavigate()
    const param = useParams()
    console.log(param);

    const handleNavigate = () => {
        navigate("/",{replace:true, state:{"name" : "sumit"}},)
    }
  return (
    <div>
      <h1>About</h1>

      <button onClick={(handleNavigate)}>Go To Home</button>
    </div>
  )
}



// use location is a hook provided by a react-router-dom used to access loacation object 