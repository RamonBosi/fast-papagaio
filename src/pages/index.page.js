import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { ContextFilterProductsByCategoryProvider } from "@/store/ContextFilterProductsByCategory";
import { AllProducts } from "./components/AllProducts";

export default function Home() {

  return (
    <>
      <ContextFilterProductsByCategoryProvider>
        <MyNavBar showProductFilter={true} />
        <TagMain>
          <AllProducts />
        </TagMain>
      </ContextFilterProductsByCategoryProvider>
      <MyFooter />
    </>
  )
}
