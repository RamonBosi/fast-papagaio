import { useContext, useEffect, useState } from "react"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Link from "next/link";
import { Product } from "./Product"
import { ScButton } from "@/styles/styledComponents/components/Button"
import { primaryButton } from "@/styles/styledComponents/components/Button/theme/primaryButton"
import { ScCupomInput } from "./styles"
import { secundaryButton } from "@/styles/styledComponents/components/Button/theme/secundaryButton"
import { ShoppingCartContext } from "@/store/ShoppingCartContext";

export function AllProducts() {

  const [loadProducts, setLoadProducts] = useState(null)

  const { getShoppingCartCache,createShoppingCartCache,addProduct } = useContext(ShoppingCartContext)

  useEffect(() => {
    createShoppingCartCache()
    addProduct(['ramon'])
  }, [])

  return (
    <div className="d-flex flex-column gap-2">
      {loadProducts || <></>}
      <div className="d-flex flex-column align-items-end gap-2 fs-5">
        <div className="d-flex gap-2 mb-2">
          <p>Frete:</p>
          <strong>R$20,00</strong>
        </div>
        <div className="w-100 d-flex justify-content-end">
          <div>
            <div className="d-flex align-items-center gap-1">
              <label className="fw-bold">Cupom</label>
              <ScCupomInput type='text' />
              <ScButton theme={primaryButton}>Aplicar</ScButton>
            </div>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Nome do desenvolvedor desse site.
                </Tooltip>
              )}
            >
              <ScButton theme={secundaryButton} className="ps-0">Dica</ScButton>
            </OverlayTrigger>
          </div>
        </div>
        <div className="d-flex gap-2 fs-2">
          <p>Total:</p>
          <strong>R$1000</strong>
        </div>
        <div>
          <Link passHref href="/forma-de-pagamento">
            <ScButton theme={primaryButton} className="fs-4 px-3 py-2">Continuar compra</ScButton>
          </Link>
        </div>
      </div>
    </div>
  )
}