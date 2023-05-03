import Image from 'next/image'
import { ScButton } from '@/styles/styledComponents/components/Button'
import { primaryButton } from '@/styles/styledComponents/components/Button/theme/primaryButton'
import { secundaryButton } from '@/styles/styledComponents/components/Button/theme/secundaryButton'
import { ScImageContainer } from './styles'
import { QuantitySelector } from '@/components/QuantitySelector'
import { RatingStars } from '@/components/RatingStars'
import { useRef } from 'react'

export const ProductCard = ({ productsInfo }) => {

  const QuantitySelectorRef = useRef()

  return (
    <div className='d-flex flex-column flex-sm-row gap-2 mx-auto'>
      <div>
        <ScImageContainer className='position-relative'>
          <Image fill priority src={productsInfo.imageSrc} alt={productsInfo.description} />
        </ScImageContainer>
      </div>
      <div className='d-flex flex-column gap-2'>
        <h1 className='m-0 text-break'>{productsInfo.productName}</h1>
        <RatingStars stars={productsInfo.stars} theme={'primary'} />
        <strong className='fs-3'>R${productsInfo.value},00</strong>
        <QuantitySelector ref={QuantitySelectorRef} />
        <div className='d-flex gap-2 fs-4'>
          <ScButton theme={primaryButton} onClick={() => console.log(QuantitySelectorRef.current.value)}>Comprar</ScButton>
          <ScButton theme={secundaryButton}>Adicionar ao carrinho</ScButton>
        </div>
      </div>
    </div>
  )
}