import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { useEffect, useState } from "react"
import jsonProducts from '@/mocks/products.json'
import { Product } from "./components/Product";
import { ScButton } from "@/styles/styledComponents/components/Button";
import { primaryButton } from "@/styles/styledComponents/components/Button/theme/primaryButton";
import { ScPurchaseSummary, ScPurchasedProducts } from './styles'
import Link from "next/link";

export default function Checkout() {

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
    <>
      <MyNavBar />
      <TagMain>
        <h1 className="align-self-center mb-3">Finalizar compra</h1>
        <div className="d-flex flex-column flex-sm-row justify-content-sm-between gap-2 p-sm-2">
          <ScPurchaseSummary className="d-flex flex-column gap-1 order-sm-1 mb-2">
            <div className="d-flex justify-content-between">
              <p>Forma de pagamento</p>
              <strong>Pix</strong>
            </div>
            <div className="d-flex justify-content-between">
              <p>Frete</p>
              <strong>R$20,00</strong>
            </div>
            <div className="d-flex justify-content-between">
              <p>Valor total</p>
              <strong>R$1000</strong>
            </div>
            <div className="d-flex flex-column gap-2 mt-2">
              <strong>Gostaria de receber um relatorio da sua compra por email ?</strong>
              <div className="d-flex gap-1 align-items-center">
                <label>Email principal</label>
                <input type={'email'} />
              </div>
              <Link href='/agradecimento' passHref>
                <ScButton className="mt-2 w-100" theme={primaryButton}>Comprar</ScButton>
              </Link>
            </div>
          </ScPurchaseSummary>
          <ScPurchasedProducts>
            {loadProducts || <></>}
          </ScPurchasedProducts>
        </div>
      </TagMain>
    </>
  )
}