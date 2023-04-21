import { ScAllProductGrid } from "./styles"
import { ValueFilter } from "../ValueFilter"
import { useContext, useEffect, useState } from "react"
import { Product } from "./Product"
import { ProductsFilterContext } from "@/store/ProductsFilterContext";
import { Loading } from "@/components/Loading";
import { productsApi } from "@/services/productsApi";
import { RequestErrorWarning } from "@/components/RequestErrorWarning";

export const AllProducts = () => {

  const { productCategory } = useContext(ProductsFilterContext)
  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    const abortController = new AbortController()

    productsApi.post(`${productCategory}/filter`, 
    { byValue: null }, 
    { signal: abortController.signal })
      .then((res) => {
        const data = res.data

        if (data) {

          const createProductsCards = data.map((p) => {

            return <Product key={p.id} productInfo={p} />
          })

          setLoadProducts({ success: true, createProductsCards })
        }
      })
      .catch(() => {
        setLoadProducts({ success: false })
      })

    return () => {
      abortController.abort()
    }
  }, [productCategory])

  if (loadProducts) {

    if (!loadProducts.success) {
      return (
        <div className="d-flex justify-content-center">
          <RequestErrorWarning error={'Não foi possível encontrar os produtos da categoria escolhida'} />
        </div>
      )
    }

    return (
      <div className="d-flex flex-column flex-md-row gap-3">
        <ValueFilter />
        <ScAllProductGrid>
          {loadProducts.createProductsCards}
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