import styled from 'styled-components'

export const ScTruncatedParagraph = styled.p`
  width: 100%;

  @media(min-width: 576px){
    width: 30ch;
  }

  @media(min-width: 700px){
    width: 40ch;
  }

  @media(min-width: 850px){
    width: 50ch;
  }

  @media(min-width: 920px){
    width: 60ch;
  }

  @media(min-width: 1050px){
    width: 70ch;
  }

  @media(min-width: 1300px){
    width: 85ch;
  }
`