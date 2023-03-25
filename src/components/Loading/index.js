import Spinner from 'react-bootstrap/Spinner';
import { ScLoading } from './styles';

export const Loading = ({ role, occupyViewport = false }) => {

  const addPropsOccupyViewport = occupyViewport ? 'align-items-center w-100 position-fixed top-0 left-0 bottom-0 right-0' : 'mt-4'

  return (
    <ScLoading className={`d-flex justify-content-center ${addPropsOccupyViewport} `}>
      <Spinner animation="border" role={role}>
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
    </ScLoading>
  )
}