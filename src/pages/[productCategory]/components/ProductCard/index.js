import Image from 'next/image'
import { ScButton } from '@/styles/styledComponents/components/Button'
import { primaryButton } from '@/styles/styledComponents/components/Button/theme/primaryButton'
import { secundaryButton } from '@/styles/styledComponents/components/Button/theme/secundaryButton'
import { ScImageContainer } from './styles'
import { QuantitySelector } from '@/components/QuantitySelector'
import { RatingStars } from '@/components/RatingStars'
import { useEffect, useRef, useState } from 'react'
import { quantitySelectorValidation } from '@/components/QuantitySelector/utils/quantitySelectorValidation'

export const ProductCard = ({ productsInfo }) => {

  const quantitySelectorRef = useRef()
  const [purchaseQuantityError, setPurchaseQuantityError] = useState(null)

  const setProduct = async (action) => {

    const quantitySelectorValue = Number(quantitySelectorRef.current.value)

    const validate = await quantitySelectorValidation({ quantityPurchased: quantitySelectorValue })

    if (validate.success) {

      const selectedQuantityIsAvailableInStock = quantitySelectorValue <= productsInfo.amount
      
      if (selectedQuantityIsAvailableInStock) {

        if (action === 'buy') {
          console.log('produto comprado')
        } else {
          console.log('produto adcionado ao carrinho de compra')
        }
      }else{

        setPurchaseQuantityError('A quantidade selecionada é maior que o estoque dispínivel')
      }
    }else{

      setPurchaseQuantityError(validate.res)
    }
  }

  useEffect(() =>{

    setPurchaseQuantityError(null)
    quantitySelectorRef.current.value = 1
  },[productsInfo])

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
        <QuantitySelector ref={quantitySelectorRef} />
        <p>Estoque disponível: {productsInfo.amount}</p>
        {purchaseQuantityError && <strong style={{color: 'red'}}>*{purchaseQuantityError}</strong>}
        <div className='d-flex gap-2 fs-4'>
          <ScButton theme={primaryButton} onClick={() => setProduct('buy')}>Comprar</ScButton>
          <ScButton theme={secundaryButton} onClick={() => setProduct('shoppingCart')}>Adicionar ao carrinho</ScButton>
        </div>
      </div>
    </div>
  )
}