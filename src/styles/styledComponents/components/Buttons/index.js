import styled from "styled-components";

export const ScButtonPrimary = styled.button`
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background-color: rgba(${props => props.theme.backgroundColor});
  color: rgba(${props => props.theme.color});

  &:hover{
    background-color: rgba(${props => props.theme.backgroundColor},.85);
  }
`

export const ScButtonSecundary = styled(ScButtonPrimary)``