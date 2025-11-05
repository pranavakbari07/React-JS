import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiCrud() {

    const [formdata, setFormdata] = useState({})
    const [Record, setRecord] = useState([])

    useEffect(()=>{
        fetchRecord()
    })

    const handleChange = (e)=>{
        setFormdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/users",formdata).then((res)=>{
            setFormdata({
                name : '',  
                age : '',
                city : ''
            })
        })
        
    }

    const fetchRecord = async(e)=>{
        await axios.get("http://localhost:5000/users").then((res)=>{
            setRecord(res.data)
        },[])
    }

  return (
    <div>
      <h1>API CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={formdata.name} name='name' onChange={handleChange} />
        <input type="text" placeholder='age' value={formdata.age} name='age' onChange={handleChange}/>
        <input type="text" placeholder='city' value={formdata.city} name='city' onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>

      {
        Record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.age}</li>
                <li>{e.city}</li>
            </ul>
        })
      }


    </div>
  )
}
