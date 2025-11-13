import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../feature/CounterSlice'

export default function Counter() {

  const dispatch = useDispatch();

    const count = useSelector((state)=>{
        return state.CounterKey.count
    })
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}
