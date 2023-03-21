import Carousel from 'react-bootstrap/Carousel';
import { Product } from './components/Product';

export const ProductCarousel = () => {

  return (
    <div className='d-flex justify-content-center'>
      <Carousel interval={null}>
        <Carousel.Item>
            <Product nomeProduto={'Notebook 1'} valor={2000}/>
            <Product nomeProduto={'Notebook 1'} valor={2000}/>
            <Product nomeProduto={'Notebook 1'} valor={2000}/>
            <Product nomeProduto={'Notebook 1'} valor={2000}/>
        </Carousel.Item>
        <Carousel.Item>
          <Product nomeProduto={'Notebook 2'} valor={2000}/>
            <Product nomeProduto={'Notebook 2'} valor={2000}/>
            <Product nomeProduto={'Notebook 2'} valor={2000}/>
            <Product nomeProduto={'Notebook 2'} valor={2000}/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}