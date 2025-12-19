import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("auth");
    if (!status) {
      navigate("/");
    }
  }, [navigate]);

  const collections = [
    {
      title: "Men’s Gold Rings",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    },
    {
      title: "Men’s Diamond Rings",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    },
    {
      title: "Men’s Gold Chains",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-200 font-sans">

      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-serif tracking-widest text-[#d4af37]">
          AURUM MEN
        </h1>

        <ul className="hidden md:flex gap-10 text-xs tracking-widest uppercase">
          <li className="hover:text-[#d4af37] cursor-pointer">Home</li>
          <li className="hover:text-[#d4af37] cursor-pointer">Collections</li>
          <li className="hover:text-[#d4af37] cursor-pointer">About</li>
          <li className="hover:text-[#d4af37] cursor-pointer">Contact</li>
        </ul>

        <button
          onClick={() => {
            localStorage.removeItem("auth");
            navigate("/");
          }}
          className="border border-[#d4af37] text-[#b3a060] px-6 py-2 text-xs tracking-widest
          hover:bg-[#d4af37] hover:text-black transition"
        >
          Logout
        </button>
      </nav>

      <section
        className="flex flex-col items-center justify-center text-center px-6 py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0')",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-[#d4af37] mb-6 bg-black/60 px-6 py-3 rounded-lg">
          Premium Jewelry for Men
        </h2>
        <p className="max-w-xl text-gray-300 mb-10 bg-black/40 px-4 py-2 rounded">
          Designed for power, elegance & timeless masculinity.
        </p>
        <button className="bg-[#d4af37] text-black px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#e6c75a] transition">
          Explore Collection
        </button>
      </section>

      <section className="px-10 py-20">
        <h3 className="text-center text-2xl font-serif text-[#d4af37] mb-14">
          Men’s Signature Collections
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {collections.map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden
              hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
              transition-all duration-500 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h4 className="font-serif text-lg text-[#d4af37] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 mb-5">
                  Crafted for modern gentlemen.
                </p>
                <button
                  className="text-xs tracking-widest uppercase border border-[#d4af37]
                  px-5 py-2 hover:bg-[#d4af37] hover:text-black transition"
                >
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111] px-10 py-24 text-center">
        <h3 className="text-2xl font-serif text-[#d4af37] mb-6">
          About Aurum Men
        </h3>
        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          Aurum Men is crafted for those who command respect.
          Every piece reflects strength, precision, and luxury.
        </p>
      </section>

      <footer className="border-t border-gray-800 px-10 py-6 text-center text-xs text-gray-500">
        © 2024 AURUM MEN. All rights reserved.
      </footer>
    </div>
  );
}
  