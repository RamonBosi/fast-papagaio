import { forwardRef } from "react";
import { ScQuantitySelector } from "./styles";
import { quantitySelectorValidation } from "./utils/quantitySelectorValidation";

export const QuantitySelector = forwardRef(function (props, ref) {

  const setAmount = async (action) => {

    const quantitySelectorValue = Number(ref.current.value)

    if (action === 'add') {

      const validate = await quantitySelectorValidation({ quantityPurchased: quantitySelectorValue })

      if (validate.success) {

        ref.current.value = quantitySelectorValue + 1
      }
    } else {

      const validate = await quantitySelectorValidation({ quantityPurchased: quantitySelectorValue - 1 })

      if (validate.success) {

        ref.current.value = quantitySelectorValue - 1
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