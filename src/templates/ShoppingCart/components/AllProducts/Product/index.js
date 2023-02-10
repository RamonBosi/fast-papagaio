export function Product({name,value,amount}) {

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div>
            <div>
              <div style={{width: '48px', height:'48px', backgroundColor: 'darkslategray'}}></div>
              </div>
            <div style={{minWidth:0}} >
              <p className="text-truncate">{name}</p>
            </div>
          </div>
        </div>
        <div>
          <p>Valor: R$ {value}</p>
          <div>Seletor de quantidade</div>
          <div>Estoque: {amount}</div>
        </div>
      </div>
      <div>
        <button>Excluir</button>
        <button>Comprar agora</button>
      </div>
    </div>
  )
}