import { Review } from "./components/Review"

export const ProductReviews = () => {

  return (
    <div className="d-flex flex-column gap-2">
      <h2>Opiniões do produto</h2>
      <div className="d-flex flex-column gap-3">
        <Review user={'Fulano'} stars={3} comment='Lorem ipsum dolor sit amet consectetur adipiscing elit, habitant finibus ultrices et aenean primis mus, elementum varius enim potenti tellus mi. Diam morbi integer cras curae quam, proin scelerisque molestie maecenas sapien volutpat, class nibh magnis montes.' />
        <Review user={'Ciclano'} stars={5} comment='Lorem ipsum dolor sit amet consectetur adipiscing elit, habitant finibus ultrices et aenean primis mus, elementum varius enim potenti tellus mi. Diam morbi integer cras curae quam, proin scelerisque molestie maecenas sapien volutpat, class nibh magnis montes.' />
        <Review user={'Deutrano'} stars={1} comment='Lorem ipsum dolor sit amet consectetur adipiscing elit, habitant finibus ultrices et aenean primis mus, elementum varius enim potenti tellus mi. Diam morbi integer cras curae quam, proin scelerisque molestie maecenas sapien volutpat, class nibh magnis montes.' />
      </div>
    </div>
  )
}