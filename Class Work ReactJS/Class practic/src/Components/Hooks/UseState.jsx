import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="text-center">UseState</h1>
      <div className="flex justify-center gap-8">
        <button onClick={increment}>increment</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count - 1)}>Decriment</button>
        <button onClick={() => setCount(0)}>Resate</button>
      </div>
    </div>
  );
}
