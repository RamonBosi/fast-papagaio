import { ScButton } from "@/styles/styledComponents/components/Button"
import { primaryButton } from "@/styles/styledComponents/components/Button/theme/primaryButton"
import { secundaryButton } from "@/styles/styledComponents/components/Button/theme/secundaryButton"
import { ScValueFilter, ScInputs } from "./styles"
import { useContext, useRef } from "react"
import { ProductsFilterContext } from "@/store/ProductsFilterContext"

export const ValueFilter = () => {

  const { handlerActiveFilters } = useContext(ProductsFilterContext)

  const minRef = useRef()
  const maxRef = useRef()

  const filterByValue = (e) => {
    e.preventDefault()

    const min = minRef.current.value
    const max = maxRef.current.value

    if (min || max) {

      handlerActiveFilters({ byValue: { min, max } })
    }
  }

  const resetFilter = () => {
    handlerActiveFilters({ byValue: false })
  }

  return (
    <ScValueFilter className="d-flex flex-column align-self-center align-self-md-start gap-1 p-2" onSubmit={filterByValue}>
      <h5 className="align-self-center">Filtrar por valor</h5>
      <ScInputs className="d-flex flex-column gap-2">
        <div className="d-flex gap-1 align-items-center">
          <label>Mínimo</label>
          <input type={'number'} ref={minRef} min={1} />
        </div>
        <div className="d-flex gap-1 align-items-center">
          <label>Máximo</label>
          <input type={'number'} ref={maxRef} min={1} />
        </div>
      </ScInputs>
      <div className="d-flex gap-2">
        <ScButton theme={primaryButton} type="submit">Filtrar</ScButton>
        <ScButton theme={secundaryButton} type="reset" onClick={resetFilter}>Resetar</ScButton>
      </div>
    </ScValueFilter>
  )
}