import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { ContextFilterProductsByCategoryProvider } from "@/store/ContextFilterProductsByCategory";
import Link from "next/link";
import { AllProducts } from "./components/AllProducts";

export default function Home() {

  return (
    <>
      <ContextFilterProductsByCategoryProvider>
        <MyNavBar showProductFilter={true} />
        <Link href='/notebook/5'>Pagina de produto</Link>
        <TagMain>
          <AllProducts />
        </TagMain>
      </ContextFilterProductsByCategoryProvider>
      <MyFooter />
    </>
  )
}
