import Image from "next/image"
import { ScProduct } from "./styles"

export const Product = ({ size, nomeProduto, valor }) => {

  return (
    <div>
      <ScProduct className="p-2 rounded">
        <div>
          <Image width={size} height={size} src={'/produtos/televisao/televisao3.jpg'} alt={'Descrição do produto'} />
        </div>
        <div className="d-flex flex-column gap-2 mt-3 fs-6">
          <p className="text-truncate">{nomeProduto}</p>
          <p>R${valor},00</p>
        </div>
      </ScProduct>
    </div>
  )
}