import { productsApi } from '@/services/products';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { Product } from './components/Product';
import { ScProductCarousel } from './styles';
import { RequestErrorWarning } from '@/components/RequestErrorWarning'

export const ProductsCarousel = () => {

  const router = useRouter()

  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    const abortController = new AbortController()
    const fetchData = async () => {
      const category = router.query.productCategory
      const res = await fetch(`http://localhost:3000/api/products/${category}/certain-amount/10`,{signal: abortController.signal})

      const resJson = await res.json()

      console.log(res)

      const createProducts = resJson.map((p) => {

        return <Product key={p.id} size={100} productsInfo={p} />
      })

      
        setLoadProducts(createProducts)
    }

    fetchData()

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <ScProductCarousel className='d-flex gap-2 pb-2'>
      {loadProducts || <Loading role={'Carregando mais produtos disponíveis para compra com base na categoria do produto atual'} />}
    </ScProductCarousel>
  )
}