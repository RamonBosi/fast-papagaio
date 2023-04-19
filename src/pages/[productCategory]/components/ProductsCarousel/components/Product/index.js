import Image from "next/image"
import Link from "next/link"
import { ScProduct } from "./styles"
import { RatingStars } from "@/components/RatingStars"

export const Product = ({ size, productsInfo }) => {

  return (
    <Link passHref href={`/${productsInfo.productCategory}/${productsInfo.id}`}>
      <ScProduct className="p-2 rounded">
        <div>
          <Image width={size} height={size} src={productsInfo.imageSrc} alt={productsInfo.description} />
        </div>
        <div className="d-flex flex-column gap-1 mt-3 fs-6">
          <p className="text-truncate">{productsInfo.productName}</p>
          <RatingStars stars={productsInfo.stars} theme={'secundary'}/>
          <p>R${productsInfo.value},00</p>
        </div>
      </ScProduct>
    </Link>
  )
}