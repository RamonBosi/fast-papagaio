import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { ProductsFilterContextProvider } from "@/store/ProductsFilterContext";
import { AllProducts } from "./components/AllProducts";

export default function Home() {

  return (
    <>
      <ProductsFilterContextProvider>
        <MyNavBar showProductFilter={true} />
        <TagMain>
          <AllProducts />
        </TagMain>
      </ProductsFilterContextProvider>
      <MyFooter />
    </>
  )
}
