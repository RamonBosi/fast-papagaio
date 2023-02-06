import { Brand } from "@/components/Brand"
import { ScHeader } from "./styles"

export const MyNavBar = () => {

  return (
    <ScHeader className="d-flex justify-content-between p-4">
      <Brand size={25}/>
      <div>
        <i className="bi bi-cart-fill text-white p-1"></i>
      </div>
    </ScHeader>
  )
}