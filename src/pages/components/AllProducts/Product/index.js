import Image from "next/image"
import productImage from '@/assets/img/pix/pix.png'
import { ScProduct } from "./styles"

export const Product = ({ nomeProduto, valor }) => {

  return (
    <ScProduct className="p-2 rounded">
      <div>
        <Image src={productImage} alt={'Descrição do produto'} />
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        <p className="text-truncate">{nomeProduto}</p>
        <p>R${valor},00</p>
      </div>
    </ScProduct>
  )
}