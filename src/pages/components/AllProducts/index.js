import { useEffect, useState } from "react"
import jsonProducts from '@/mocks/products.json'
import { Product } from "./Product"
import { ScAllProductGrid } from "./styles"
import { ValueFilter } from "../ValueFilter"

export const AllProducts = () => {

  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    const products = jsonProducts.map((p) => {

      return <Product key={p.id} nomeProduto={p.nomeProduto} valor={p.valor} />
    })

    setLoadProducts(products)

  }, [])

  return (
    <div className="d-flex flex-column flex-md-row gap-3">
      <ValueFilter/>
      <ScAllProductGrid>
        {loadProducts}
      </ScAllProductGrid>
    </div>
  )
}