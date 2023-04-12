import { ScRatingStars } from "./styles"

export const RatingStars = ({ stars, theme, className = null }) => {

  const maxStars = 5

  let loadStars = []

  for (let n = 1; n <= maxStars; n++) {
    if (n <= stars) {
      loadStars.push(<i key={n} className="bi bi-star-fill"></i>)
    } else {
      loadStars.push(<i key={n} className="bi bi-star"></i>)
    }
  }

  return (
    <ScRatingStars className={className} theme={theme}>
      {loadStars}
    </ScRatingStars>
  )
}