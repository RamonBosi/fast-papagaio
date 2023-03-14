import { useEffect, useState } from "react"
import jsonProducts from '@/mocks/products.json'
import { Product } from "./Product"
import { ScAllProductGrid } from "./styles"

export const AllProducts = () => {

  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    const products =  jsonProducts.map((p) =>{

      return <Product key={p.id} nomeProduto={p.nomeProduto} valor={p.valor}/>
    })

    setLoadProducts(products)

  }, [])

  return(
    <ScAllProductGrid>
      {loadProducts}
    </ScAllProductGrid>
  )
}