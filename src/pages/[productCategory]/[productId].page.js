import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { ProductCarousel } from "@/components/ProductCarousel";
import { TagMain } from "@/components/TagMain";
import { ProductCard } from "./components/ProductCard";
import { ProductDescription } from "./components/ProductDescription";
import { ProductReviews } from "./components/ProductReviews";

export default function ProductInformation() {

  return (
    <>
      <MyNavBar />
      <TagMain>
        <div className="d-flex flex-column gap-3 p-2">
          <ProductCard />
          <ProductDescription/>
          <ProductReviews/>
          <ProductCarousel/>
        </div>
      </TagMain>
      <MyFooter />
    </>
  )
}

export function getStaticPaths() {

  return {
    paths: [],
    fallback: true
  }
}

export function getStaticProps(ctx) {

  return {
    props: {
      params: ctx.params
    },
    revalidate: 5
  }
}