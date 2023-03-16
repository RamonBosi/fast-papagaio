import { useEffect, useState } from "react"
import { ScRatingStars } from "./styles"

export const RatingStars = ({ stars }) => {

  const [showStars, setShowStars] = useState(null)

  useEffect(() => {
    const maxStars = 5

    let loadStars = []

    for (let n = 1; n <= maxStars; n++){
      if(n <= stars){
        loadStars.push(<i key={n} className="bi bi-star-fill"></i>)
      }else{
        loadStars.push(<i key={n} className="bi bi-star"></i>)
      }
    }

    setShowStars(loadStars)
  }, [])

  return (
    <ScRatingStars className="d-flex gap-1">
      {showStars}
    </ScRatingStars>
  )
}