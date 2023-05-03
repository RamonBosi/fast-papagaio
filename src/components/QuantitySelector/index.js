import { forwardRef } from "react";
import { ScQuantitySelector } from "./styles";

export const QuantitySelector = forwardRef(function (props,ref) {

  const setAmount = (action) => {

    const currentValue = ref.current.value

    if (action === 'add') {

      ref.current.value = Number(currentValue) + 1
    } else {

      const valueIsGreaterThanOrEqualtoOne = !!(Number(currentValue) - 1)

      if(valueIsGreaterThanOrEqualtoOne){

        ref.current.value = Number(currentValue) - 1
      }
    }
  }

  return (
    <ScQuantitySelector>
      <div>
        <span onClick={() => setAmount('remove')}>
          <i className="bi bi-dash"></i>
        </span>
      </div>
      <input className="fs-4" ref={ref} defaultValue={1} type={'number'} aria-label='Seletor de quantidade' aria-describedby="Quantidades do produto que serão compradas" />
      <div>
        <span onClick={() => setAmount('add')}>
          <i className="bi bi-plus"></i>
        </span>
      </div>
    </ScQuantitySelector>
  )
})