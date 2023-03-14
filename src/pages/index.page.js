import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { AllProducts } from "./components/AllProducts";

export default function Home() {

  return (
    <>
      <MyNavBar showProductFilter={true}/>
      <TagMain>
        <AllProducts/>
      </TagMain>
      <MyFooter/>
    </>
  )
}
