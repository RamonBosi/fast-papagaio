export const ProductDescription = ({ description }) => {

  return (
    <div className='d-flex flex-column'>
      <h2 className='my-2'>Descrição</h2>
      <div className='d-flex flex-column gap-2'>
        <p>{description}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}