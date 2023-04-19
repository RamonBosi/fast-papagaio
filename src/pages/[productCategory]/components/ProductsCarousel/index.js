import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from './components/Product';
import { ScProductCarousel } from './styles';
import { Loading } from '@/components/Loading';
import { productsApi } from '@/services/productsApi';
import { RequestErrorWarning } from '@/components/RequestErrorWarning';

export const ProductsCarousel = () => {

  const router = useRouter()

  const [loadProducts, setLoadProducts] = useState(null)

  useEffect(() => {

    const params = router.query

    const abortController = new AbortController()

    productsApi.get(
      `${params.productCategory}/certain-amount/10`,
      { signal: abortController.signal }
    )
      .then((res) => {

        const data = res.data

        if(data){

          const createProducts = data.map((p) => {
  
            return <Product key={p.id} size={100} productsInfo={p} />
          })
  
          setLoadProducts(createProducts)
        }

      })
      .catch(() => {
        setLoadProducts(<RequestErrorWarning error={'Não existe produtos dessa categoria'}/>)
      })

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