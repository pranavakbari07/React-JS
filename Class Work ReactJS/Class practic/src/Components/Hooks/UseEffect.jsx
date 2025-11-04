// This is a important hook used to perfom side effect in functional component like data featching and api calling.
// We can also perfom life cycle method in functional component using useEffect hook.

import React, { use, useEffect, useState, useTransition } from "react";

export default function UseEffect() {
  // Mounting phase
  //   useEffect(() => {
  //     console.log("Component Mounted");
  //   }, []);

  // Updating phase

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, [count]);

  //  // Unmounting phase

  //   useEffect(() => {
  //     return // Statement get executr on unmounting phase
  //   },[]);

  return (
    <div>
      <h1>UseEffect</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
