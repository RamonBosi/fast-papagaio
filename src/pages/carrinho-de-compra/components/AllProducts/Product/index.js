import { ThemeProvider } from "styled-components";

import { ScButton } from "@/styles/styledComponents/components/Button";
import { secundaryButton } from "@/styles/styledComponents/components/Button/theme/secundaryButton";
import { QuantitySelector } from "./components/QuantitySelector";
import { ScTruncatedParagraph } from "./styles";

export function Product({ name, value, amount }) {

  return (
    <div className="d-flex flex-column gap-2 mb-3">
      <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
        <div className="d-flex gap-2">
          <div>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'darkslategray' }}></div>
          </div>
          <ScTruncatedParagraph className="text-truncate">
            {name}
          </ScTruncatedParagraph>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <div className="d-flex justify-content-end align-items-center gap-2 mb-1">
              <QuantitySelector/>
              <strong className="fs-5">R$ {value}</strong>
            </div>
            <p>Estoque disponível: <strong>{amount}</strong></p>
          </div>
        </div>
      </div>
      <div className="d-flex gap-1">
        <ThemeProvider theme={secundaryButton}>
          <ScButton className="ps-0">Excluir</ScButton>
          <ScButton>Comprar agora</ScButton>
        </ThemeProvider>
      </div>
    </div>
  )
}