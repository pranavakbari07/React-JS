import React from 'react'

export default function Footer() {
    return (
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
    )
}
