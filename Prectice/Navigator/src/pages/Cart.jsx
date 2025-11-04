import React, { useEffect, useState } from 'react'

export default function Cart() {
  const [record, setRecord] = useState([])

  useEffect(() => {
    const allCart = JSON.parse(localStorage.getItem("cart")) || []
    setRecord(allCart)
  }, [])

    const removeBtn = (id) => {
        const newData = record.filter((e) => e.id !== id)
        setRecord(newData)
        localStorage.setItem("record", JSON.stringify(newData))
    }

  return (
    <div className='p-6'>
      {record.length > 0 ? (
        record.map((e, i) => (
          <div key={i} className='flex items-center justify-between bg-white rounded-lg p-4 border mb-3'>
            <div className='flex w-full justify-between'>
              <div>
                <h2 className='font-semibold text-gray-900 truncate'>{e.title}</h2>
                <p className='text-sm text-gray-600 truncate'>{e.desc}</p>
                <p className='mt-1 font-semibold'>₹{e.price}</p>
              </div>
              <button onClick={()=>removeBtn(e.id)} className='text-red-500 ml-4 cursor-pointer'> Remove </button>
            </div>
          </div>
        ))
      ) : (
        <div className='flex justify-center items-center'>
          <p>No items in your cart</p>
        </div>
      )}
    </div>
  )
}
