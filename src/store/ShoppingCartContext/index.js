import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartContextProvider = ({ children }) => {

  const [changedShoppingCartCache, setChangedShoppingCartCache] = useState(null)

  const cache = {
    key: 'shopping-cart-cache',
    chosenProducts: 'chosenProducts',
    couponApplied: 'couponApplied',
    formPayment: 'formPayment'
  }

  const getShoppingCartCache = () => {

    const getShoppingCartCacheLocalStorage = localStorage.getItem(cache.key)

    if(getShoppingCartCacheLocalStorage){
      return JSON.parse(getShoppingCartCacheLocalStorage)
    }

    return null
  }

  const createShoppingCartCache = () => {
    
    if (!getShoppingCartCache()){
      const cacheValue = {
        [cache.chosenProducts]: null,
        [cache.couponApplied]: null,
        [cache.formPayment]: null,
      }

      localStorage.setItem(cache.key, JSON.stringify(cacheValue))
    }
  }

  const addProduct = (product) =>{

    const cacheValue = getShoppingCartCache()

    const chosenProducts = {
      chosenProducts:{
        ...cacheValue.chosenProduct,
        ...product
      }
    }

    localStorage.setItem(cache.key, JSON.stringify({...cacheValue,...chosenProducts}))
  }

  const provider = {
    getShoppingCartCache,
    createShoppingCartCache,
    addProduct
  }

  return (
    <ShoppingCartContext.Provider value={provider}>
      {children}
    </ShoppingCartContext.Provider>
  )
}