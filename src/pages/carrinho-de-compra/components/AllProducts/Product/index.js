import { ThemeProvider } from "styled-components";

import { ScButton } from "@/styles/styledComponents/components/Button";
import { secundaryButton } from "@/styles/styledComponents/components/Button/theme/secundaryButton";
import { QuantitySelector } from "./components/QuantitySelector";
import { ScTruncatedParagraph } from "./styles";

export function Product({ name, value, amount }) {

  return (
    <div className="d-flex flex-column gap-2 mb-3">
      <div className="d-flex flex-column flex-sm-row justify-content-sm-between gap-1">
        <div className="d-flex gap-2">
          <div>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'darkslategray' }}></div>
          </div>
          <ScTruncatedParagraph className="text-truncate">
            {name}
          </ScTruncatedParagraph>
        </div>
        <div className="d-flex justify-content-around align-items-center gap-sm-2">
          <QuantitySelector/>
          <strong className="fs-5">R$ {value}</strong>
          <p className="d-none">Estoque: {amount}</p>
        </div>
      </div>
      <div className="d-flex gap-1">
        <ThemeProvider theme={secundaryButton}>
          <ScButton>Excluir</ScButton>
          <ScButton>Comprar agora</ScButton>
        </ThemeProvider>
      </div>
    </div>
  )
}