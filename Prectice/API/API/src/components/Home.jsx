import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Home() {

  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setArr(data.data);
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Products</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {
          arr.map((e, i) => (
            <div className="border border-gray-300 rounded p-4 w-80 flex flex-col items-center justify-center" key={e.id}>
              <h2 className="text-lg font-semibold text-center">{e.title}</h2>
              <p>Price: ${e.price}</p>
              <img src={e.image} alt={e.title} style={{ height: "150px" }} />
            </div>
          ))
        }
      </div>
    </>
  );
}
