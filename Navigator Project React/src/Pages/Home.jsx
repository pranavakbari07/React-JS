import React from "react";
import Card from "../Components/Card";

export default function Home() {
  let arr = [
    {
      id: "1",
      image: "/21.jpg",
      title: "Amul Gold",
      weight: "500 ml",
      price: "₹33",
      category: "milk",
    },
    {
      id: "2",
      image: "/22.jpg",
      title: "Amul Taaza",
      weight: "500 ml",
      price: "₹27",
      category: "milk",
    },
    {
      id: "3",
      image: "/23.jpg",
      title: "Amul Masti Curd",
      weight: "400 ml",
      price: "₹35",
      category: "curd",
    },
    {
      id: "4",
      image: "/24.jpg",
      title: "Amul Masti Curd",
      weight: "200 ml",
      price: "₹23",
      category: "curd",
    },
  ];

  localStorage.setItem("cartItems", JSON.stringify(arr));

  return (
    <div className="pt-35">
      <div className="flex justify-between items-center px-53">
        <h1 className="text-2xl font-bold">Dairy, Bread & Eggs</h1>
        <button className="text-green-500">see all</button>
      </div>

      <div className="flex justify-center gap-8">
        {arr.map((e, i) => {
          return (
            <Card
              key={i}
              id={e.id}
              image={e.image}
              title={e.title}
              weight={e.weight}
              price={e.price}
              category={e.category}
            />
          );
        })}
      </div>
    </div>
  );
}
