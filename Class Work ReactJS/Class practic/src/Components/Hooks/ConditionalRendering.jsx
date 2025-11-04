import React, { useState } from 'react'

export default function ConditionalRendering() {
    // const choice = true; 
    const [choice, setChoice] = useState(true);
  return (
    <div style={{backgroundColor: choice && "lightblue"}}>
      <h1>ConditionalRendering</h1>
      <button onClick={()=>setChoice(!choice)}>Click</button>
      {/* {choice == true ? <h2>Hello</h2> : <h2>Bye</h2>} */}

      {choice && <h2>Hello</h2>}


    </div>
  )
}
