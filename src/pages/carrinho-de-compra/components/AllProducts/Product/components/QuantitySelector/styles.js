import styled from 'styled-components'

export const ScQuantitySelector = styled.div`
  display: flex;
  align-items: center;

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-color:rgba(83, 62, 133);
    color: var(--default-white);

    > span{
      font-size: 25px;
      margin: 0 0 4px 0;
    }
  }

  input{
    width: 90px;
    height: 30px;
    border: none;
    border-top:2px solid rgba(83, 62, 133);
    border-bottom:2px solid rgba(83, 62, 133);
    outline: none;
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`