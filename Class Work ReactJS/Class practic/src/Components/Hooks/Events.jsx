import React, { useState } from 'react'

export default function Events() {
    const [name,setName] = useState("");
    const greet = ()=>{
        console.log("hello",name);
    }
  return (
    <div>
        <h1>Events</h1>
        {/* <input type="text" onChange={()=>greet("sumit")} name="" id="" /> */}
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
        <button onClick={()=>greet("rahul")}>Click</button>
        <h1>{name}</h1>
    </div>
  )
}
