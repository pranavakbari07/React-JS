import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navbar from "../components/Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { getDoc, getDocs } from "firebase/firestore";

export default function Home() {

  const [search, setSearch] = useState("")
  const [cat, setCat] = useState("all")
  const [sort, setSort] = useState("")

  const navigate = useNavigate()

  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setAuthUser(user);
      } else {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUser()
      fetchData()
    }
  }, [userId])

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", userId)).then((res) => {
      setUserData(res.data());
    });
  };

  const fetchData = async () => {
    const allData = await getDocs(collection(db, "Todos"));
    const newData = allData.docs
      .map((data) => ({
        docId: data.id,
        ...data.data(),
      }))
      .filter((t) => t.uid === userId);
    setRecord(newData);
  };


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

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <>
      <div className="bg-amber-100 h-25 w-full flex justify-between items-center px-10">
        <h1 className="font-bold text-3xl">Blinkit</h1>
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer group">
              <img
                src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"}
                alt="User Avatar"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all"
              />
              <div className="hidden md:block">
                <div className="font-semibold text-sm text-gray-700">{userData?.name || authUser?.displayName || 'User'}</div>
                <div className="text-xs text-gray-500">{userData?.email || authUser?.email || ''}</div>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg font-semibold text-sm text-white hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            style={{
              backgroundColor: '#1877F2',
              backgroundImage: 'linear-gradient(135deg, #1877F2 0%, #4267B2 100%)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log Out
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>


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
        <div>
          <div className="footer bg-gray-50 py-8 px-20 mt-10">
            {/* Top section */}
            <div className="foot1 mb-6">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">Useful Links</h4>
                <div className="flex items-center gap-4">
                  <h4 className="cat text-lg font-semibold">Categories</h4>
                  <h5 className="text-blue-600 cursor-pointer hover:underline">see all</h5>
                </div>
              </div>
            </div>

            {/* Middle links section */}
            <div className="foot2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
              {/* Useful Links columns */}
              <div className="foot space-y-2">
                <a href="#" className="about block text-gray-600 hover:text-black">About</a>
                <a href="#" className="block text-gray-600 hover:text-black">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-black">Blog</a>
                <a href="#" className="block text-gray-600 hover:text-black">Press</a>
                <a href="#" className="block text-gray-600 hover:text-black">Lead</a>
                <a href="#" className="block text-gray-600 hover:text-black">Value</a>
              </div>

              <div className="foot space-y-2">
                <a href="#" className="about block text-gray-600 hover:text-black">Privacy</a>
                <a href="#" className="block text-gray-600 hover:text-black">Terms</a>
                <a href="#" className="block text-gray-600 hover:text-black">FAQs</a>
                <a href="#" className="block text-gray-600 hover:text-black">Security</a>
                <a href="#" className="block text-gray-600 hover:text-black">Mobile</a>
                <a href="#" className="block text-gray-600 hover:text-black">Contact</a>
              </div>

              <div className="foot space-y-2">
                <a href="#" className="about block text-gray-600 hover:text-black">Partner</a>
                <a href="#" className="block text-gray-600 hover:text-black">Franchise</a>
                <a href="#" className="block text-gray-600 hover:text-black">Seller</a>
                <a href="#" className="block text-gray-600 hover:text-black">Warehouse</a>
                <a href="#" className="block text-gray-600 hover:text-black">Deliver</a>
                <a href="#" className="block text-gray-600 hover:text-black">Resources</a>
              </div>

              {/* Categories columns */}
              <div className="foot5 space-y-2">
                <a href="#" className="about block text-gray-600 hover:text-black">Vegetables & Fruits</a>
                <a href="#" className="block text-gray-600 hover:text-black">Cold Drinks & Juices</a>
                <a href="#" className="block text-gray-600 hover:text-black">Bakery & Biscuits</a>
                <a href="#" className="block text-gray-600 hover:text-black">Dry Fruits, Masala & Oil</a>
                <a href="#" className="block text-gray-600 hover:text-black">Paan Corner</a>
                <a href="#" className="block text-gray-600 hover:text-black">Pharma & Wellness</a>
                <a href="#" className="block text-gray-600 hover:text-black">Ice Creams & Frozen Desserts</a>
                <a href="#" className="block text-gray-600 hover:text-black">Beauty & Cosmetics</a>
                <a href="#" className="block text-gray-600 hover:text-black">Stationery Needs</a>
                <a href="#" className="block text-gray-600 hover:text-black">Navratri Specials</a>
              </div>

              <div className="foot5 space-y-2">
                <a href="#" className="about block text-gray-600 hover:text-black">Dairy & Breakfast</a>
                <a href="#" className="block text-gray-600 hover:text-black">Instant & Frozen Food</a>
                <a href="#" className="block text-gray-600 hover:text-black">Sweet Tooth</a>
                <a href="#" className="block text-gray-600 hover:text-black">Sauces & Spreads</a>
                <a href="#" className="block text-gray-600 hover:text-black">Organic & Premium</a>
                <a href="#" className="block text-gray-600 hover:text-black">Cleaning Essentials</a>
                <a href="#" className="block text-gray-600 hover:text-black">Personal Care</a>
                <a href="#" className="block text-gray-600 hover:text-black">Fashion & Accessories</a>
                <a href="#" className="block text-gray-600 hover:text-black">Toys & Games</a>
              </div>

              <div className="foot5 space-y-2">
                <a href="#" className="block text-gray-600 hover:text-black">Munchies</a>
                <a href="#" className="block text-gray-600 hover:text-black">Tea, Coffee & Health Drinks</a>
                <a href="#" className="block text-gray-600 hover:text-black">Atta, Rice & Dal</a>
                <a href="#" className="block text-gray-600 hover:text-black">Chicken, Meat & Fish</a>
                <a href="#" className="block text-gray-600 hover:text-black">Baby Care</a>
                <a href="#" className="block text-gray-600 hover:text-black">Home & Office</a>
                <a href="#" className="block text-gray-600 hover:text-black">Pet Care</a>
                <a href="#" className="block text-gray-600 hover:text-black">Electronics & Electricals</a>
                <a href="#" className="block text-gray-600 hover:text-black">Print Store</a>
              </div>
            </div>

            {/* Bottom section */}
            <div className="foot3 border-t border-gray-300 pt-6">
              <div className="app flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
                <p className="text-gray-600">© Blink Commerce Private Limited, 2016-2024</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <h5 className="font-semibold">Download App</h5>
                  <div className="flex items-center gap-2">
                    <img src="app.webp" alt="App Store" className="store h-8 cursor-pointer" />
                    <img src="play.webp" alt="Google Play" className="store h-8 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="blink">
                <p className="text-gray-500 text-sm">
                  "Blinkit" is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to "GROFFR.COM" which is a real estate services business operated by "Redstone Consultancy Services Private Limited".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}