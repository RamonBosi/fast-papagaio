export function Product({ name, value, amount }) {

  return (
    <div className="d-flex flex-column mb-3 gap-1">
      <div className="d-flex gap-2">
        <div>
          <div style={{ width: '48px', height: '48px', backgroundColor: 'darkslategray' }}></div>
        </div>
        <p className="text-truncate">{name}</p>
      </div>
      <div className="d-flex align-items-center gap-4">
        <p>Quantidade: <strong>{amount}</strong></p>
        <strong className="fs-5">R$ {value}</strong>
      </div>
    </div>
  )
}