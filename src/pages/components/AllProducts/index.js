import { ScAllProductGrid } from "./styles"
import { ValueFilter } from "../ValueFilter"
import { useContext, useEffect, useState } from "react"
import { Product } from "./Product"
import { productsApi } from "@/services/products";
import { ContextFilterProductsByCategory } from "@/store/ContextFilterProductsByCategory";
import { RequestErrorWarning } from "@/components/RequestErrorWarning";
import { Loading } from "@/components/Loading";

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

        setLoadProducts({
          success: true,
          products: createProductsCards
        }
        )
      })
      .catch(() => { setLoadProducts({ success: false }) })

  }, [productCategory])

  const HandlerLoadProducts = () => {

    if (loadProducts) {

      if (loadProducts.success) {
        return (
          <div className="d-flex flex-column flex-md-row gap-3">
            <ValueFilter />
            <ScAllProductGrid>
              {loadProducts.products}
            </ScAllProductGrid>
          </div>
        )
      } else {

        return (
          <div>
            <RequestErrorWarning error={'Não foi possível buscar os produtos, tente novamente mais tarde'} />
          </div>
        )
      }
    }

    return (
      <div className="d-flex justify-content-center">
        <Loading role={'Carregando os produtos de acordo com a categoria selecionada'} />
      </div>
    )
  }

  return HandlerLoadProducts()
}