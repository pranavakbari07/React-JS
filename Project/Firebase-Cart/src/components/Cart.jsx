import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const formatPrice = (price) => {
    return `₹${parseFloat(price.replace(/[₹,]/g, '')).toLocaleString('en-IN')}`
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length === 0
              ? 'Your cart is empty'
              : `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'} in your cart`}
          </p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg
              className="mx-auto h-24 w-24 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Start adding some products to your cart!</p>
            <Link
              to="/deshboard"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => {
                const itemPrice = parseFloat(item.price.replace(/[₹,]/g, ''))
                const itemTotal = itemPrice * item.quantity

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition duration-300"
                  >
                    {/* Product Image */}
                    <div className="sm:w-32 sm:h-32 w-full h-48 flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        {item.color && (
                          <p className="text-sm text-gray-600 mb-2">{item.color}</p>
                        )}
                        {item.rating && (
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-600">{item.rating}</span>
                          </div>
                        )}
                        <p className="text-lg font-bold text-gray-800">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                          >
                            −
                          </button>
                          <span className="text-lg font-semibold w-12 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-600">Total</p>
                          <p className="text-xl font-bold text-gray-800">
                            {formatPrice(itemTotal.toString())}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="self-start sm:self-center p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                      title="Remove item"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                )
              })}

              {/* Clear Cart Button */}
              <div className="pt-4">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 font-medium transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">{formatPrice(getCartTotal().toString())}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-800">
                    <span>Total</span>
                    <span>{formatPrice(getCartTotal().toString())}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 mb-4">
                  Proceed to Checkout
                </button>

                <Link
                  to="/deshboard"
                  className="block text-center text-gray-600 hover:text-gray-800 font-medium transition"
                >
                  Continue Shopping
                </Link>

                {/* Special Offer Banner */}
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm font-semibold text-yellow-800 mb-1">
                    🎉 Special Offer!
                  </p>
                  <p className="text-xs text-yellow-700">
                    Buy 1 Get 1 Free - Add 2 items to cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

