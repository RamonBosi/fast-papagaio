import { MyNavBar } from "@/components/MyNavBar";
import { AllProducts } from "./components/AllProducts";

export default function ShoppingCart(){

  return(
    <>
      <MyNavBar/>
      <main className="d-flex flex-column mt-4">
        <h1 className="align-self-center mb-3">Carrinho de compras</h1>
        <AllProducts/>
      </main>
    </>
  )
}