import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { AllProducts } from "./components/AllProducts";

export default function ShoppingCart() {

  return (
    <>
      <MyNavBar />
      <TagMain>
        <h1 className="align-self-center mb-3">Carrinho de compras</h1>
        <AllProducts />
      </TagMain>
      <MyFooter/>
    </>
  )
}