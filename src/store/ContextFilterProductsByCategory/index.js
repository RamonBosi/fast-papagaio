import { createContext, useState } from "react";

export const ContextFilterProductsByCategory = createContext()

export const ContextFilterProductsByCategoryProvider = ({ children }) => {

  const [productCategory, setProductCategory] = useState('notebook')

  const value = {
    productCategory,
    setProductCategory
  }

  return (
    <ContextFilterProductsByCategory.Provider value={value}>
      {children}
    </ContextFilterProductsByCategory.Provider>
  )
}