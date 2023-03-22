import { MyFooter } from "@/components/MyFooter";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { productsApi } from "@/services/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AllProducts } from "./components/AllProducts";

export default function Home() {

  const [productCategory, setProductCategory] = useState('notebook')
  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    productsApi.get(productCategory)
    .then((res) =>{
      setLoadProducts(res.data)
    })
    .catch((err) => console.log(err))

  }, [])

  return (
    <>
      <MyNavBar showProductFilter={true} />
      <Link href='/notebook/5'>Pagina de produto</Link>
      <TagMain>
        <AllProducts products={loadProducts}/>
      </TagMain>
      <MyFooter />
    </>
  )
}
