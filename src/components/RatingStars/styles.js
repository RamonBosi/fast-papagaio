import styled from "styled-components";

export const ScRatingStars = styled.div`
  display: flex;
  gap: 5px;

  i{
    color: ${props => props.theme === 'primary' ? 'var(--elements-background-color)' : 'var(--page-background-color)'};
  }
`