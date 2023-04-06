import { Loading } from "@/components/Loading";
import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { TagMain } from "@/components/TagMain";
import { useRouter } from "next/router";
import { ProductCard } from "./components/ProductCard";
import { ProductDescription } from "./components/ProductDescription";
import { ProductReviews } from "./components/ProductReviews";
import { getByCategoryAndId } from "@/services/products/getByCategoryAndId";

export default function ProductInformation({ productsInfo }) {

  const router = useRouter()

  if(router.isFallback){

    return <Loading role={'Carregando o produto selecionado'} occupyViewport={true}/>
  }

  return (
    <>
      <MyNavBar />
      <TagMain>
        <div className="d-flex flex-column gap-4">
          <ProductCard productsInfo={productsInfo}/>
          <ProductDescription />
          <ProductReviews />
          <div>
            <h2>Ofertas do dia</h2>
            <ProductsCarousel />
          </div>
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

export async function getStaticProps(ctx) {

  const { productCategory, productId } = ctx.params

  const product = getByCategoryAndId(productCategory,productId)

  return {
    props:{
      productsInfo: product
    }
  }
}