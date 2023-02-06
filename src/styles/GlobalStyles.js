import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    --elements-background-color: rgba(83, 62, 133);
    --page-background-color: rgba(243, 233, 221);
    --default-white: rgba(255, 255, 255);
    --default-black: rgba(0, 0, 0);
  }

  body{
    background-color: var(--page-background-color);
  }
`