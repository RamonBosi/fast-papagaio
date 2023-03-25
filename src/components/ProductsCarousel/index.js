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
    productsApi.get(`${router.query.productCategory}/certain-amount/10`)
      .then((res) => {
        console.log(res.data)

        const createProducts = res.data.map((p) => {

          return <Product key={p.id} size={100} productsInfo={p} />
        })

        setLoadProducts(createProducts)
      })
      .catch(() => {
        setLoadProducts(<RequestErrorWarning error={'Não foi possível carregar os produtos da orfetas do dia'} />)
      })
  }, [])

  return (
    <ScProductCarousel className='d-flex gap-2 pb-2'>
      {loadProducts || <Loading role={'Carregando mais produtos disponíveis para compra com base na categoria do produto atual'} />}
    </ScProductCarousel>
  )
}