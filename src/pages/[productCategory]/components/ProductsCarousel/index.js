import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from './components/Product';
import { ScProductCarousel } from './styles';
import { Loading } from '@/components/Loading';
import { getCertainAmountByCategory } from '@/services/products/getCertainAmountByCategory';

export const ProductsCarousel = () => {

  const router = useRouter()

  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {
    let ignore = false

    const category = router.query.productCategory

    const products = getCertainAmountByCategory(category, 10)

    // console.log(products)
    
    const createProducts = products.map((p) => {

      return <Product key={p.id} size={100} productsInfo={p} />
    })

    if (!ignore) {

      setLoadProducts(createProducts)
    }

    return () => {
      ignore = true
    }
  }, [])

  return (
    <ScProductCarousel className='d-flex gap-2 pb-2'>
      {loadProducts || <Loading role={'Carregando mais produtos disponíveis para compra com base na categoria do produto atual'} />}
    </ScProductCarousel>
  )
}