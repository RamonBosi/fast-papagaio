import { ScButton } from "@/styles/styledComponents/components/Button"
import { primaryButton } from "@/styles/styledComponents/components/Button/theme/primaryButton"
import { secundaryButton } from "@/styles/styledComponents/components/Button/theme/secundaryButton"
import { ScValueFilter, ScInputs } from "./styles"

export const ValueFilter = () => {

  return (
    <ScValueFilter className="d-flex flex-column align-self-center align-self-md-start gap-1 p-2">
      <h5 className="align-self-center">Filtrar por valor</h5>
      <ScInputs className="d-flex flex-column gap-2">
        <div className="d-flex gap-1 align-items-center">
          <label>Mínimo</label>
          <input type={'number'} />
        </div>
        <div className="d-flex gap-1 align-items-center">
          <label>Máximo</label>
          <input type={'number'} />
        </div>
      </ScInputs>
      <div className="d-flex gap-2">
        <ScButton theme={primaryButton}>Filtrar</ScButton>
        <ScButton theme={secundaryButton}>Resetar</ScButton>
      </div>
    </ScValueFilter>
  )
}