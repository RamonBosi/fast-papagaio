import Spinner from 'react-bootstrap/Spinner';
import { ScLoading } from './styles';

export const Loading = ({ role }) => {

  return (
    <ScLoading className='d-flex justify-content-center'>
      <Spinner animation="border" role={role}>
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
    </ScLoading>
  )
}