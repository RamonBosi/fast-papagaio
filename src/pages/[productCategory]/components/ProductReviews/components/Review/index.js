import { RatingStars } from "@/components/RatingStars"
import { ScReview } from "./styles"

export const Review = ({ user,stars, comment }) => {

  return (
    <ScReview className="d-flex flex-column gap-2 pb-2">
      <strong className="fs-4">{user}</strong>
      <RatingStars stars={stars} />
      <p className="text-break">{comment}</p>
    </ScReview>
  )
}