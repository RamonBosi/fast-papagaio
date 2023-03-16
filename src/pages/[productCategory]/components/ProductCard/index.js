import jsonProducts from '@/mocks/products.json'
import Image from 'next/image'
import pix from '@/assets/img/pix/pix.png'
import { useRef } from 'react'
import { ScButton } from '@/styles/styledComponents/components/Button'
import { primaryButton } from '@/styles/styledComponents/components/Button/theme/primaryButton'
import { secundaryButton } from '@/styles/styledComponents/components/Button/theme/secundaryButton'
import { ScProductCard } from './styles'

export const ProductCard = () => {

  const chosenProduct = useRef(jsonProducts[0])

  return (
    <ScProductCard className='d-flex flex-column flex-sm-row gap-2 mx-auto'>
      <Image className='w-100 h-100 align-self-center' src={pix} alt={chosenProduct.current.nomeProduto} />
      <div className='d-flex flex-column gap-2'>
        <h1 className='m-0 text-break'>{chosenProduct.current.nomeProduto}</h1>
        <strong className='fs-3'>R${chosenProduct.current.valor},00</strong>
        <div className='d-flex gap-2 fs-4'>
          <ScButton theme={primaryButton}>Comprar</ScButton>
          <ScButton theme={secundaryButton}>Adicionar ao carrinho</ScButton>
        </div>
      </div>
    </ScProductCard>
  )
}