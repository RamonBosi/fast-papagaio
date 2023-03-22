import { Brand } from "@/components/Brand"
import { ScHeader } from "./styles"
import Link from "next/link"
import { FilterProductsByCategory } from "@/pages/components/FilterProductsByCategory"

export const MyNavBar = ({ showProductFilter = false }) => {

  return (
    <ScHeader className="d-flex justify-content-between align-items-center p-3 gap-2">
      <Brand size={40} keepFlexRow={!showProductFilter}/>
      {showProductFilter && <FilterProductsByCategory />}
      <div>
        <Link passHref href="/carrinho-de-compra">
          <i className="bi bi-cart-fill text-white p-1 fs-4"></i>
        </Link>
      </div>
    </ScHeader>
  )
}