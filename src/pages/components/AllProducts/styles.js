import styled from 'styled-components'

export const ScAllProductGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;

  @media(min-width: 430px){
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 680px){
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(min-width: 900px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`