import Image from "next/image"
import { ScProduct } from "./styles"

export const Product = ({ nomeProduto, valor }) => {

  return (
    <ScProduct className="p-2 rounded">
      <div>
        <Image width={90} height={90} src={'/produtos/televisao/televisao3.jpg'} alt={'Descrição do produto'} />
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        <p className="text-truncate">{nomeProduto}</p>
        <p>R${valor},00</p>
      </div>
    </ScProduct>
  )
}