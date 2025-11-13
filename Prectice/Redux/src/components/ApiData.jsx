import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../feature/ApiSlice'

export default function ApiData() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchData())
    },[])

    const response = useSelector((state)=>{
        return state.ApiKey
    })

    if(response.loading == true){
        return <p>Loading...</p>
    }

  return (
    <div>
      <h1>API Data</h1>
      {
        response.record && 
        response.record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.title}</li>
            </ul>
        })
      }
    </div>
  )
}
