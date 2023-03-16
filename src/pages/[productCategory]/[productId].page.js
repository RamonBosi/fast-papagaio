import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { ProductCard } from "./components/ProductCard";

export default function ProductInformation() {

  return (
    <>
      <MyNavBar />
      <TagMain>
        <div>
          <ProductCard />
          <p>Descrição do produto</p>
          <p>Comentarios do produto</p>
          <p>Carrosel mostrando algumas opções de produtos</p>
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