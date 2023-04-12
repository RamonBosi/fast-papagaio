import { ScAllProductGrid } from "./styles"
import { ValueFilter } from "../ValueFilter"
import { useContext, useEffect, useState } from "react"
import { Product } from "./Product"
import { ContextFilterProductsByCategory } from "@/store/ContextFilterProductsByCategory";
import { Loading } from "@/components/Loading";
import { productsApi } from "@/services/productsApi";

export const AllProducts = () => {

  const { productCategory } = useContext(ContextFilterProductsByCategory)
  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    productsApi.get(productCategory)
      .then((res) => {

        const createProductsCards = res.data.map((p) => {

          return <Product key={p.id} productInfo={p} />
        })

        setLoadProducts(createProductsCards)
      })

  }, [productCategory])

  if (loadProducts) {

    return (
      <div className="d-flex flex-column flex-md-row gap-3">
        <ValueFilter />
        <ScAllProductGrid>
          {loadProducts}
        </ScAllProductGrid>
      </div>
    )
  }

  return (
    <div className="d-flex justify-content-center">
      <Loading role={'Carregando os produtos de acordo com a categoria selecionada'} />
    </div>
  )
}