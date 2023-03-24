import Image from 'next/image'
import { ScButton } from '@/styles/styledComponents/components/Button'
import { primaryButton } from '@/styles/styledComponents/components/Button/theme/primaryButton'
import { secundaryButton } from '@/styles/styledComponents/components/Button/theme/secundaryButton'
import { ScProductCard } from './styles'
import { QuantitySelector } from '@/components/QuantitySelector'

export const ProductCard = ({ productsInfo }) => {

  return (
    <ScProductCard className='d-flex flex-column flex-sm-row gap-2 mx-auto'>
      <Image width={40} height={40} src={productsInfo.imageSrc} alt={productsInfo.description} />
      <div className='d-flex flex-column gap-2'>
        <h1 className='m-0 text-break'>{productsInfo.productName}</h1>
        <strong className='fs-3'>R${productsInfo.value},00</strong>
        <QuantitySelector />
        <div className='d-flex gap-2 fs-4'>
          <ScButton theme={primaryButton}>Comprar</ScButton>
          <ScButton theme={secundaryButton}>Adicionar ao carrinho</ScButton>
        </div>
      </div>
    </ScProductCard>
  )
}