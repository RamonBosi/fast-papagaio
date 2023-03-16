import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";

export default function ProductInformation() {

  return (
    <>
      <MyNavBar />
      <TagMain>
        <p>Card do produto</p>
        <p>Opção de comprar ou adicionar no carrinho</p>
        <p>Comentarios do produto</p>
        <p>Carrosel mostrando algumas opções de produtos</p>
      </TagMain>
      <MyFooter />
    </>
  )
}

export function getStaticPaths(){

  return{
    paths:[],
    fallback: true
  }
}

export function getStaticProps(ctx){

  return{
    props:{
      params: ctx.params
    },
    revalidate: 5
  }
}