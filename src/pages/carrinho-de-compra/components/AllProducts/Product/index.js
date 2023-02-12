import { ThemeProvider } from "styled-components";

import { ScPrimaryButton } from "@/styles/styledComponents/components/ScPrimaryButton";
import { ScSecundaryButton } from "@/styles/styledComponents/components/ScSecundaryButton";
import { themeScPrimaryButton } from "@/styles/styledComponents/components/ScPrimaryButton/theme";
import { themeScSecundaryButton } from "@/styles/styledComponents/components/ScSecundaryButton/theme";
import { ScTruncatedParagraph } from "./styles";
import { QuantitySelector } from "./components/QuantitySelector";

export function Product({ name, value, amount }) {

  return (
    <div className="d-flex flex-column gap-2">
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
        <ThemeProvider
          theme={themeScSecundaryButton}>
          <ScSecundaryButton>Excluir</ScSecundaryButton>
        </ThemeProvider>
        <ThemeProvider
          theme={themeScPrimaryButton}>
          <ScPrimaryButton>Comprar agora</ScPrimaryButton>
        </ThemeProvider>
      </div>
    </div>
  )
}