import styled from 'styled-components'

export const ScValueFilter = styled.form`
  border:2px solid rgba(83, 62, 133);
  border-radius: 5px;
  width:100%;
  max-width: 330px;
  
  input{
    width: 90px;
    height: 30px;
    padding: 0 0 0 4px;
    border:0.50px solid rgba(83, 62, 133);
    outline: none;
    border-radius: 5px;
    -moz-appearance: textfield;

    &:focus{
      border:2px solid rgba(83, 62, 133);
    }

    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media(min-width: 350px){
    height: 130px;
  }
`

export const ScInputs = styled.div`
  
  @media(min-width: 350px){
    flex-direction: row !important;
  }
`