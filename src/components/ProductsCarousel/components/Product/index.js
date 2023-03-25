import Image from "next/image"
import Link from "next/link"
import { ScProduct } from "./styles"

export const Product = ({ size, productsInfo }) => {

  // console.log(productsInfo)

  return (
    <Link passHref href={`/${productsInfo.productCategory}/${productsInfo.id}`}>
      <ScProduct className="p-2 rounded">
        <div>
          <Image width={size} height={size} src={productsInfo.imageSrc} alt={productsInfo.description} />
        </div>
        <div className="d-flex flex-column gap-2 mt-3 fs-6">
          <p className="text-truncate">{productsInfo.productName}</p>
          <p>R${productsInfo.value},00</p>
        </div>
      </ScProduct>
    </Link>
  )
}