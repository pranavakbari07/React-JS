 import React, { useState } from 'react'
 
 export default function Event() {
    const [name,setName] = useState("")
    const [age ,setAge] = useState("")
    const [city,setCity] = useState("")
    
    const [record,setRecord] = useState([])

    const adddata = ()=>{
        let obj ={"name" : name ,"age" : age,"City" : city}
        setRecord([...record,obj])
        setName("")
        setAge("")
        city("")
    }

   return (
     <div>
        <h1>Events</h1>
        <input type="text" placeholder='Enter youe name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)} />
        <input type="text" placeholder='Enter your city' onChange={(e)=>{setCity(e.target.value)}}/>
        <button onClick={adddata}>Add</button>
        {
            record.map((e,i)=>{
                return(
                    <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.age}</li>
                    </ul>
                )
            })
        }
       
     </div>
   )
 }
 