import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiCrud() {

    
    const [formdata, setFormdata] = useState({})
    const [Record, setRecord] = useState([])

    const [editIndex, setEditIndex] = useState(null)

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
        if(editIndex==null){
            await axios.post("http://localhost:5000/users", formdata).then((res)=>{
                setRecord([...Record, formdata])
            }  )
        }else{
            await axios.put(`http://localhost:5000/users/${editIndex}`, formdata).then((res)=>{
                const singleData = Record.find((item)=> item.id == editIndex)
                singleData.name = formdata.name
                singleData.age = formdata.age
                singleData.city = formdata.city
        })}
    }

    setFormdata({
        name : '',
        age : '',
        city : ''
    })

    const fetchRecord = async(e)=>{
        await axios.get("http://localhost:5000/users").then((res)=>{
            setRecord(res.data)
        },[])
    }

    const handleDelete = async (id)=>{
        await axios.delete(`http://localhost:5000/users/${id}`).then((res)=>{
            let newData = Record.filter((item)=> item.id != id)
            setRecord(newData)
        })
    }

    const handleEdit = (id)=>{
        const singleData = Record.find((item)=> item.id == id)
        setFormdata({
            name : singleData.name,
            age : singleData.age,
            city : singleData.city
        })
        setEditIndex(id)
    }

  return (
    <div>
      <h1>API CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={formdata.name} name='name' onChange={handleChange} />
        <input type="text" placeholder='age' value={formdata.age} name='age' onChange={handleChange}/>
        <input type="text" placeholder='city' value={formdata.city} name='city' onChange={handleChange}/>
        <button type='submit'>{editIndex==null ? "Add Data" : "Update Data"}</button>
      </form>

      {
        Record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.age}</li>
                <li>{e.city}</li>
                <li><button onClick={()=>handleEdit(e.id)}>Edit</button></li>
                <li><button onClick={()=>handleDelete(e.id)}>Delete</button></li>
            </ul>
        })
      }


    </div>
  )
}
