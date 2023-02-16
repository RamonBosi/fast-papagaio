import { ScOption } from './styles';

export function Option({ optionId, icon, optionText }) {

  return (
    <ScOption>
      <label htmlFor={optionId} className='d-flex p-3 gap-3 align-items-center'>
        <input type={'radio'} id={optionId} defaultValue={optionId} name='saldo-fastPapagaio' />
        {icon}
        <p>{optionText}</p>
      </label>
    </ScOption>
  )
}