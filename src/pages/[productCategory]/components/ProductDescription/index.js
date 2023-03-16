import jsonProducts from '@/mocks/products.json'
import { useRef } from 'react'

export const ProductDescription = () => {

  const chosenProduct = useRef(jsonProducts[0])

  return (
    <div className='d-flex flex-column'>
      <h2 className='my-2'>Descrição</h2>
      <div className='d-flex flex-column gap-2'>
        <p>{chosenProduct.current.descricao}</p>
        <p>{chosenProduct.current.descricao}</p>
      </div>
    </div>
  )
}