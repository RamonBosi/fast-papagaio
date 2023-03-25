import { productsApi } from '@/services/products';
import { useEffect } from 'react';
import { Product } from './components/Product';
import { ScProductCarousel } from './styles';

export const ProductCarousel = () => {

  useEffect(() =>{
    productsApi.get('notebook/certain-amount/3')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },[])

  return (
    <ScProductCarousel className='d-flex gap-2 pb-2'>
      <Product size={100} nomeProduto={'Notebook 1 cvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
      <Product size={100} nomeProduto={'Notebook 1'} valor={2000}/>
    </ScProductCarousel>
  )
}