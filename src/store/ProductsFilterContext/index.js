import { createContext, useState } from "react";

export const ProductsFilterContext = createContext()

export const ProductsFilterContextProvider = ({ children }) => {

  const [productCategory, setProductCategory] = useState('notebook')
  const [activeFilters, setActiveFilters] = useState({})

  const handlerActiveFilters = (newFilter) => {

    setActiveFilters((prevFilter) => ({ ...prevFilter, ...newFilter }))
  }

  const value = {
    productCategory,
    setProductCategory,
    activeFilters,
    handlerActiveFilters
  }

  return (
    <ProductsFilterContext.Provider value={value}>
      {children}
    </ProductsFilterContext.Provider>
  )
}