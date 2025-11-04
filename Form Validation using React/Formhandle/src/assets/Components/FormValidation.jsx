import React, { useState } from "react";

export default function FormValidation() {
  const [formdata, setFormdata] = useState({});
  const [record, setRecord] = useState([]);
  const [error,setError] = useState()

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formdata);


    setRecord([...record, formdata]);

    setFormdata({
      name: "",
      subject: "",
      age: "",
      gender: "",
      city: "",
    });
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={formdata.name}
          onChange={handlechange}
          name="name"
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={formdata.subject}
          onChange={handlechange}
          name="subject"
          placeholder="Enter your subject"
        />
        <input
          type="text"
          value={formdata.age}
          onChange={handlechange}
          name="age"
          placeholder="Enter your age"
        />
        <input
          type="radio"
          value={"male"}
          checked={formdata.gender == "male"}
          onChange={handlechange}
          name="gender"
          id=""
        />
        Male
        <input
          type="radio"
          value={"female"}
          checked={formdata.gender == "female"}
          onChange={handlechange}
          name="gender"
          id=""
        />
        Female
        <select name="city" value={formdata.city} onChange={handlechange} id="">
          <option value="" hidden>
            select your city
          </option>
          <option value="Rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Ahemdabad">Ahemdabad</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {
        record.map((e,i)=>{
            return <ul key={i}>
                <li>Name : {e.name}</li>
                <li>Subject : {e.subject}</li>
                <li>Age : {e.age}</li>
                <li>Gender : {e.gender}</li>
                <li>City :  {e.city}</li>
            </ul>
        })
      }

     
    </div>
  );
}
