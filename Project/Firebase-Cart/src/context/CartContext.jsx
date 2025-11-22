import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../../firebaseconfig'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState(null)

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        // Load cart from Firestore when user logs in
        loadCartFromFirestore(currentUser.uid)
      } else {
        // Load from localStorage when user is not logged in
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
          setCartItems(JSON.parse(savedCart))
        }
      }
    })
    return () => unsubscribe()
  }, [])

  // Load cart from Firestore
  const loadCartFromFirestore = async (uid) => {
    try {
      const cartRef = doc(db, 'Carts', uid)
      const cartSnap = await getDoc(cartRef)
      if (cartSnap.exists()) {
        const cartData = cartSnap.data()
        setCartItems(cartData.items || [])
        localStorage.setItem('cart', JSON.stringify(cartData.items || []))
      } else {
        // If no cart in Firestore, check localStorage and sync
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
          const localCart = JSON.parse(savedCart)
          setCartItems(localCart)
          // Save to Firestore
          await saveCartToFirestore(uid, localCart)
        }
      }
    } catch (error) {
      console.error('Error loading cart from Firestore:', error)
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }
    }
  }

  // Save cart to Firestore
  const saveCartToFirestore = async (uid, items) => {
    try {
      const cartRef = doc(db, 'Carts', uid)
      await setDoc(cartRef, {
        items: items,
        updatedAt: new Date().toISOString()
      }, { merge: true })
      console.log('Cart saved to Firestore successfully')
    } catch (error) {
      console.error('Error saving cart to Firestore:', error)
    }
  }

  // Save cart to localStorage and Firestore whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
    
    // Also save to Firestore if user is logged in
    if (user && user.uid) {
      saveCartToFirestore(user.uid, cartItems)
    }
  }, [cartItems, user])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹,]/g, ''))
      return total + price * item.quantity
    }, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



