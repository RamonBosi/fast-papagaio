import { Loading } from "@/components/Loading";
import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { TagMain } from "@/components/TagMain";
import { productsApi } from "@/services/products";
import { useRouter } from "next/router";
import { ProductCard } from "./components/ProductCard";
import { ProductDescription } from "./components/ProductDescription";
import { ProductReviews } from "./components/ProductReviews";

export default function ProductInformation({ productsInfo }) {

  // console.log(typeof productsInfo)

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

  let json = null

  try {
    const res = await fetch(`http://localhost:3000/api/products/${productCategory}/id/${productId}`)
    const resJson = await res.json()

    json = {
      props:{
        productsInfo: resJson
      }
    }
  } catch (error) {
    console.log(error)

    json = {
      notFound:true
    }
  }
  
  return json
}