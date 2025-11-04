import React from 'react'
import Cards from '../components/Cards'

export default function Home() {
    const product = [
        {
            id : 1,
            title : "Cake 1",
            desc : "let arr one",
            price : "250"
        },
        {
            id : 2,
            title : "Cake 2",
            desc : "let arr two",
            price : "270"
        },
    ]    

    localStorage.setItem("products",JSON.stringify(product))

  return (
    <div>
        {
            product.map((e,i)=>{
                return <Cards key={i} id={e.id} title={e.title} desc={e.desc} price={e.price} />
            })
        }
    </div>
  )
}
