import { RatingStars } from "@/components/RatingStars"
import Image from "next/image"
import { ScProduct } from "./styles"

export const Product = ({ productName, value, imageSrc, stars, description }) => {

  return (
    <ScProduct className="p-2 rounded">
      <div className="d-flex flex-column">
        <Image 
          className="flex-grow-1" 
          priority 
          width={180} 
          height={180} 
          src={imageSrc} 
          alt={description} 
        />
        <RatingStars stars={stars}/>
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        <p className="text-truncate">{productName}</p>
        <p>R${value},00</p>
      </div>
    </ScProduct>
  )
}