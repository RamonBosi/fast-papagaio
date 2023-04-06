import { RatingStars } from "@/components/RatingStars"
import Image from "next/image"
import Link from "next/link"
import { ScProduct } from "./styles"

export const Product = ({ productInfo }) => {

  return (
    <Link passHref href={`/${productInfo.productCategory}/${productInfo.id}`}>
      <ScProduct className="p-2 rounded">
        <div className="d-flex flex-column gap-1">
          <Image
            priority
            width={184}
            height={180}
            src={productInfo.imageSrc}
            alt={productInfo.description}
          />
          <RatingStars stars={productInfo.stars} theme={'secundary'} />
        </div>
        <div className="d-flex flex-column gap-2 mt-2">
          <p className="text-truncate">{productInfo.productName}</p>
          <p>R${productInfo.value},00</p>
        </div>
      </ScProduct>
    </Link>
  )
}