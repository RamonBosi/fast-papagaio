import styled from 'styled-components'

export const ScAllProductGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;

  @media(min-width: 430px){
    grid-template-columns: repeat(2,1fr);
  }

  @media(min-width: 680px){
    grid-template-columns: repeat(3,1fr);
  }

  @media(min-width: 768px){
    grid-template-columns: repeat(2,1fr);
    flex-grow: 1;
  }

  @media(min-width: 980px){
    grid-template-columns: repeat(3,1fr);
  }

  @media(min-width: 1250px){
    grid-template-columns: repeat(4,1fr);
  }
`