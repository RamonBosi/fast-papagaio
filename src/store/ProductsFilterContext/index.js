import { createContext, useState } from "react";

export const ProductsFilterContext = createContext()

export const ProductsFilterContextProvider = ({ children }) => {

  const [productCategory, setProductCategory] = useState('notebook')

  const value = {
    productCategory,
    setProductCategory
  }

  return (
    <ProductsFilterContext.Provider value={value}>
      {children}
    </ProductsFilterContext.Provider>
  )
}