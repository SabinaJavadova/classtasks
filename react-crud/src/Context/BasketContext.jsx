import React from 'react'
import { createContext,useState } from 'react'

export const BasketContext =createContext(null)

const BasketProvider = ({children}) => {
    const [Basket,setBasket] =useState([])

       const addToBasket = (product) => {
        const found = Basket.find((q) => q.id === product.id)

        if (!found) {
            setBasket([...Basket, { ...product, quantity: 1 }])
        } else {
            found.quantity++
            setBasket([...Basket])
        }
    }
    
    const removeBasketItem = (product) => {
        setBasket((prevBasket) => prevBasket.filter((q) => q.id !== product.id))
    }
    const increaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity++
            return [...prevBasket]
        })
    }
    const decreaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity--
            if (found.quantity === 0) {
                return prevBasket.filter((q) => q.id !== product.id)
            }
            return [...prevBasket]
        })
    }
    const clearBasket = () => {
        setBasket([])
    }

    const calculateTotalPrice = () => {
        return Basket.reduce((sum, curr) => sum + curr.price * curr.quantity, 0).toFixed(2)
    }


  return (
    <BasketContext.Provider value={{ Basket, addToBasket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket, calculateTotalPrice }}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider