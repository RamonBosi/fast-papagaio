import styled from "styled-components";

export const ScPurchaseSummary = styled.div`
  
  input{
    border: 1px rgba(83, 62, 133) solid;
                  
    &:focus{
      outline:1.5px rgba(83, 62, 133) solid; 
    }
  }

  @media(min-width: 576px){
    max-width: 295px;
    height:280px;
    position: sticky;
    top: 15px;
  }
`

export const ScPurchasedProducts = styled.div`
  
  @media(min-width: 576px){
    width: 40%;
  }
`

