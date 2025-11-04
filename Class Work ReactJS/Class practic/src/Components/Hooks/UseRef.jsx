import React, { useRef } from 'react'

export default function UseRef() {  

    const userRef = useRef();

    const handleClick = ()=>{
        console.log(userRef.current.value);
    }
  return (
    <div>
      <h1>UseRef : This is a hook to used to create mutable referance with dom element and it does note cause re-render.</h1>
      <input type="text" ref={userRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
