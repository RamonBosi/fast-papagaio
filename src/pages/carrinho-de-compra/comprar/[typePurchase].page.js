import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { AllProducts } from "../components/AllProducts";
import { productsApi } from "@/services/productsApi";
import { ShoppingCartContextProvider } from "@/store/ShoppingCartContext";

export default function ShoppingCart(propsPage) {

  return (
    <>
      <MyNavBar />
      <TagMain>
        <h1 className="align-self-center mb-3">Carrinho de compras</h1>
        <ShoppingCartContextProvider>
          <AllProducts />
        </ShoppingCartContextProvider>
      </TagMain>
      <MyFooter />
    </>
  )
}

export async function getServerSideProps(ctx) {

  const params = ctx.query

  if (params.typePurchase === 'um-produto') {

    const product = await productsApi.get(`${params.categoria}/id/${params.idProduto}`)

    if (product.data) {

      return {
        props: {
          productsInfo: product.data,
          typePurchase: 'um-produto'
        }
      }
    }

    return {
      notFound: true
    }
  } else if (params.typePurchase === 'varios-produtos') {

    return {
      props: {
        productsInfo: null,
        typePurchase: 'varios-produtos'
      }
    }
  }

  return {
    notFound: true
  }
}