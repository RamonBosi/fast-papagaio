import { ScTruncatedParagraph } from "./styles";

export function Product({ name, value, amount }) {

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
        <div className="d-flex gap-2">
          <div>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'darkslategray' }}></div>
          </div>
          <ScTruncatedParagraph className="text-truncate">
            {name}
          </ScTruncatedParagraph>
        </div>
        <div className="d-flex justify-content-around gap-sm-2">
          <div>Seletor de quantidade</div>
          <p>R$ {value}</p>
          <p className="d-none">Estoque: {amount}</p>
        </div>
      </div>
      <div>
        <button>Excluir</button>
        <button>Comprar agora</button>
      </div>
    </div>
  )
}