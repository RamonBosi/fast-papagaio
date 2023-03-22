import { ScAllProductGrid } from "./styles"
import { ValueFilter } from "../ValueFilter"
import { useEffect, useState } from "react"
import { Product } from "./Product"

export const AllProducts = ({ products }) => {

  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    if (products) {

      const createProductsCards = products.map((p) => {

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
    }

  }, [products])

  return (
    <div className="d-flex flex-column flex-md-row gap-3">
      <ValueFilter />
      <ScAllProductGrid>
        {loadProducts}
      </ScAllProductGrid>
    </div>
  )
}