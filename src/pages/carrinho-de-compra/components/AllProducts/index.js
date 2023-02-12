import { useEffect, useState } from "react"
import jsonProducts from '@/mocks/products.json'
import { Product } from "./Product"

export function AllProducts() {

  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    const productsComponents = jsonProducts.map((p) => {

      return <Product
        key={p.id}
        name={p.nomeProduto}
        value={p.valor}
        amount={p.quantidade} />
    })

    setLoadProducts(() => productsComponents)

  }, [])

  return (
    <div className="d-flex flex-column gap-2 p-2">
      {loadProducts || <></>}
    </div>
  )
}