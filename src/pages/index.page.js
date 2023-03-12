import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";

export default function Home() {
  return (
    <>
      <MyNavBar showProductFilter={true}/>
      <MyFooter/>
    </>
  )
}
