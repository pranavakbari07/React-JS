import React, { useState } from "react";
import Card from "../Components/Card";
import Hero from "../Components/Hero";

export default function Home() {

  const [search, setSearch] = useState("")
  const [cat, setCat] = useState("all")
  const [sort, setSort] = useState("")


  const products = [
    {
      id: 1,
      title: "Amul Gold Full Cream Milk",
      description: "500 ml",
      price: 35,
      time: "8 MINS",
      category: "Dairy",
      image: "1.avif",
    },
    {
      id: 2,
      title: "Amul Masti Pouch Curd",
      description: "390 g",
      price: 35,
      time: "8 MINS",
      category: "Dairy",
      image: "2.avif",
    },
    {
      id: 3,
      title: "Amul Salted Butter",
      description: "100 g",
      price: 60,
      oldPrice: 62,
      time: "8 MINS",
      category: "Dairy",
      image: "3.avif",
    },
    {
      id: 4,
      title: "Amul Cow Milk",
      description: "500 ml",
      price: 30,
      time: "8 MINS",
      category: "Dairy",
      image: "4.avif",
    },
    {
      id: 5,
      title: "Mother Dairy Classic Pouch Curd",
      description: "390 g",
      price: 35,
      time: "8 MINS",
      category: "Dairy",
      image: "5.avif",
    },
    {
      id: 6,
      title: "Mother Dairy Toned Milk",
      description: "500 ml",
      price: 29,
      time: "8 MINS",
      category: "Dairy",
      image: "6.avif",
    },
    {
      id: 7,
      title: "Ultimate Rolling Paper with Filter Tips & Roach",
      description: "32 pieces",
      price: 90,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "7.avif",
    },
    {
      id: 8,
      title: "Perfect Rolled Cones (Natural) - Bongchie",
      description: "3 pack",
      price: 45,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "8.avif",
    },
    {
      id: 9,
      title: "Brown Rolling Paper Cones - Stash Pro",
      description: "6 pieces",
      price: 90,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "9.avif",
    },
    {
      id: 10,
      title: "Brown Ripper Rolling Paper 32 Leaves + 32 Tips - Stash Pro",
      description: "64 pieces",
      price: 120,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "10.avif",
    },
    {
      id: 11,
      title: "Colour Roach - Stash Pro",
      description: "32 sheets",
      price: 50,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "11.avif",
    },
    {
      id: 12,
      title: "Thins Pre-Rolled Rolling Paper By LIT",
      description: "1 pack",
      price: 25,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "12.avif",
    },
    {
      id: 13,
      title: "Classic Pre-Rolled Rolling Paper",
      description: "32 + 32 pack",
      price: 143,
      oldPrice: 150,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "13.avif",
    },
    {
      id: 14,
      title: "Lo! Foods Gluten Free Millet Ragi Chips",
      description: "75 g",
      price: 99,
      oldPrice: null,
      time: "8 MINS",
      category: "Snacks & Munchies",
      image: "14.avif",
    },
    {
      id: 15,
      title: "Protein Chef Baked Coated Peanuts (Masala)",
      description: "50 g",
      price: 69,
      oldPrice: 75,
      time: "8 MINS",
      category: "Snacks & Munchies",
      image: "15.avif",
    },
    {
      id: 16,
      title: "Kettle Studio Rock Sea Salt & English Vinegar Chips",
      description: "113 g",
      price: 99,
      oldPrice: null,
      time: "8 MINS",
      category: "Snacks & Munchies",
      image: "16.avif",
    },
    {
      id: 17,
      title: "Pringles Original Potato Chips - Pack of 2",
      description: "2 x 107 g",
      price: 187,
      oldPrice: 250,
      time: "8 MINS",
      category: "Snacks & Munchies",
      image: "17.avif",
    },
    {
      id: 18,
      title: "Kettle Studio Air Fried Lime & Chilli Potato Chips",
      description: "80 g",
      price: 99,
      oldPrice: null,
      time: "8 MINS",
      category: "Snacks & Munchies",
      image: "18.avif",
    },
    {
      id: 19,
      title: "Beanly Choco Hazelnut Spread with Breadsticks",
      description: "52 g",
      price: 98,
      oldPrice: 133,
      time: "8 MINS",
      category: "Snacks & Munchies",
      image: "19.avif",
    },
    {
      id: 20,
      title: "Protein Chef Baked Coated Peanuts (Masala)",
      description: "50 g",
      price: 69,
      oldPrice: 75,
      time: "8 MINS",
      category: "Snacks & Munchies",
      image: "15.avif",
    },
    {
      id: 21,
      title: "Colour Roach - Stash Pro",
      description: "32 sheets",
      price: 50,
      time: "8 MINS",
      category: "Smoking Accessories",
      image: "11.avif",
    },
    {
      id: 22,
      title: "Mother Dairy Toned Milk",
      description: "500 ml",
      price: 29,
      time: "8 MINS",
      category: "Dairy",
      image: "6.avif",
    }
  ];

  const searchedData = products.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  })

  const filteredData = [...searchedData].filter((item) => {
    if (cat == "all") {
      return item
    } else {
      return item.category == cat;
    }
  })

  const sortedData = [...filteredData].sort((a, b) => {
    if (sort == "asc") {
      return a.price - b.price
    } else {
      return b.price - a.price;
    }
  })

  return (
    <>
      <div className="flex justify-center items-center gap-10 m-5">
        <input
          type="email"
          id="email"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-2xl p-2.5"
          placeholder="Search Products..."
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          id="countries"
          onChange={(e) => setCat(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-2xl p-2.5"

        >
          <option hidden>Select Category</option>
          <option selected value={"all"}>All</option>
          <option value={"Snacks & Munchies"}>Snacks & Munchies</option>
          <option value={"Dairy"}>Dairy</option>
          <option value={"Smoking Accessories"}>Smoking Accessories</option>
        </select>
        <select
          id="countries"
          onChange={(e) => setSort(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-2xl p-2.5"

        >
          <option hidden>Select Sorting</option>
          <option value={"asc"}>Low to High</option>
          <option value={"desc"}>High to Low</option>
        </select>
      </div>
      <div className="flex justify-center flex-wrap gap-5.5 mx-10">
        {sortedData.map((e, i) => {
          return (
            <Card
              key={i}
              id={e.id}
              title={e.title}
              time={e.time}
              description={e.description}
              price={e.price}
              category={e.category}
              image={e.image}
            />
          );
        })}
      </div>
    </>
  );
}