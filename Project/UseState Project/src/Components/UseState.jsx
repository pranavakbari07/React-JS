// import React, { useState } from "react";

// export default function UseState() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="UseState">
//       <h1>UseState</h1>
//       <h1>counter</h1>
//       <h1>Count : {count}</h1>
//       <div className="buttons">
//         <button onClick={() => setCount(count + 5)}>Count + 5</button>
//         <button onClick={() => setCount(count - 5)}>Count - 5</button>
//         <button onClick={() => setCount(count / 5)}>Count / 5</button>
//         <button onClick={() => setCount(count * 5)}>Count * 5</button>
//         <button onClick={() => setCount(0)}>Resat</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react'

export default function UseState() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Count : {count}</h1>
      <div>
        <button onClick={()=>setCount(count+5)}>count + 5</button>
        <button onClick={()=>setCount(count-5)}>count - 5</button>
      </div>
    </div>
  )
}
