import React from "react";
import Card from "../Components/Card";

export default function Home() {
  let arr = [
    {
      image: "21.jpg",
      title: "Amul Gold",
      weight: "UA16+ | Hindi",
      price: "₹149",
    },
    {
      image: "22.jpg",
      title: "Mirai",
      weight: "UA16+ | Hindi and 1 more",
      price: "₹149",
    },
    {
      image: "23.jpg",
      title: "The Bengal Files",
      weight: "A | Hindi",
      price: "₹149",
    },
    {
      image: "24.jpg",
      title: "Ajey: The Untold Story",
      weight: "UA1+ | Hindi",
      price: "₹149",
    },
  ];
  return (
    <div className="pt-35">
      <div className="flex justify-between items-center px-53">
        <h1 className="text-2xl font-bold">Dairy, Bread & Eggs</h1>
        <button className="text-green-500">see all</button>
      </div>

      <div className="flex justify-center gap-8">
        {arr.map((e, i) => {
          return <Card key={i} obj={e} index={i} />;
        })}
      </div>
    </div>
  );
}
