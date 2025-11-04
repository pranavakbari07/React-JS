import React, { useState } from 'react'

export default function FormHandle() {

  const [formdata,setFormdata] = useState({})

  const [record,setRecord] = useState([])

  const [error,setError] = useState("")

  const handlechange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }

  const handlesubmit = (e)=>{
    e.preventDefault()
    // console.log(formdata);
    setRecord ([...record,formdata]) 
    setError("")

     const nameRegex = /^[A-Za-z ]{3,}$/;

     if(nameRegex.test(formdata.name)){
      setError("❌ Name should have at least 3 alphabets!")
     }


    // if(!name || !subject || !age || !gender || !city){
    //   setError("fill all feild")
    // }

    setFormdata({
      name:"",  
      subject:"",
      age:"",
      gender:"",
      city:""
    })
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" value={formdata.name} onChange={handlechange} name='name' placeholder='enter your name' />
        <input type="text" value={formdata.subject} onChange={handlechange} name='subject' placeholder='enter your subject' />
        <input type="text" value={formdata.age} onChange={handlechange} name='age' placeholder='enter your age' />
        <input type="radio" value={"male"} checked={formdata.gender == "male"} onChange={handlechange} name="gender" id="" />Male
        <input type="radio" value={"female"} checked={formdata.gender == "female"} onChange={handlechange} name="gender" id="" />Female
        <select name="city" value={formdata.city} onChange={handlechange} id="">
          <option value="" hidden> select your city</option>
          <option value="Rajkot">Rajkot</option>
        </select>
        <button type='submit'>Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      


      {
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <li>{e.age}</li>
            <li>{e.gender}</li>
            <li>{e.city}</li>
          </ul>
        })
      }
    </div>
  )
}

