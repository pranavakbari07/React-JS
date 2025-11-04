import React from 'react'

export default function Home() {
    //  let name = "React"
    //   console.log(name);

    //   let arr = [1,2,3,4,5]
      

    //   let obj = {
    //     "name": "React",
    //   }

    let arr = [
      {"name": "Raj", "age": 24, "city": "Surat"},
      {"name": "Ram", "age": 25, "city": "Ahemdabad"},
      {"name": "Ravi", "age": 26, "city": "Mumbai"},
      {"name": "Ramesh", "age": 27, "city": "Delhi"},
      {"name": "Rakesh", "age": 28, "city": "Banglore"},
    ]

  return (
    <div>

      {
        arr.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.city}</li>
          </ul>
        })
      }


     {/* <h1>{name}</h1>
     <h1>{arr[1]}</h1>
     <h1>{obj.name}</h1>

     {          
        arr.map((e,i)=>{
            return <h1>{e}----{i}</h1>
        })
     } */}

    </div>
  )
}
