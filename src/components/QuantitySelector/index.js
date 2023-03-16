import { ScQuantitySelector } from "./styles";

export function QuantitySelector(){

  return(
    <ScQuantitySelector>
      <div>
        <span>-</span>
      </div>
      <input type={'number'} aria-label='Seletor de quantidade' aria-describedby="Quantidades do produto que serão compradas"/>
      <div>
        <span>+</span>
      </div>
    </ScQuantitySelector>
  )
}