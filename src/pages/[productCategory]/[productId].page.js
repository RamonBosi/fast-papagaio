import { Loading } from "@/components/Loading";
import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { ProductCarousel } from "@/components/ProductCarousel";
import { TagMain } from "@/components/TagMain";
import { productsApi } from "@/services/products";
import { useRouter } from "next/router";
import { ProductCard } from "./components/ProductCard";
import { ProductDescription } from "./components/ProductDescription";
import { ProductReviews } from "./components/ProductReviews";

export default function ProductInformation({ productsInfo }) {

  const router = useRouter()

  if(router.isFallback){

    return <Loading role={'Carregando o produto selecionado'} occupyViewport={true}/>
  }

  return (
    <>
      <MyNavBar />
      <TagMain>
        <div className="d-flex flex-column gap-4 p-2">
          <ProductCard productsInfo={productsInfo}/>
          <ProductDescription />
          <ProductReviews />
          <div>
            <h2>Ofertas do dia</h2>
            <ProductCarousel />
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

  const res = await productsApi.get(`${productCategory}/id/${productId}`)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return {
    props: {
      productsInfo: res
    },
    revalidate: 5
  }
}