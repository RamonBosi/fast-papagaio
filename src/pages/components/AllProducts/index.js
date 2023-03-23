import { ScAllProductGrid } from "./styles"
import { ValueFilter } from "../ValueFilter"
import { useContext, useEffect, useState } from "react"
import { Product } from "./Product"
import { productsApi } from "@/services/products";
import { ContextFilterProductsByCategory } from "@/store/ContextFilterProductsByCategory";

export const AllProducts = () => {

  const { productCategory } = useContext(ContextFilterProductsByCategory)
  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {
    
    productsApi.get(productCategory)
      .then((res) => {
        const createProductsCards = res.data.map((p) => {

          return <Product
            key={p.id}
            imageSrc={p.imageSrc}
            productName={p.productName}
            value={p.value}
            description={p.description}
            stars={p.stars}
          />
        })

        setLoadProducts(createProductsCards)
      })
      .catch((err) => console.log(err))

  }, [productCategory])

  return (
    <div className="d-flex flex-column flex-md-row gap-3">
      <ValueFilter />
      <ScAllProductGrid>
        {loadProducts}
      </ScAllProductGrid>
    </div>
  )
}