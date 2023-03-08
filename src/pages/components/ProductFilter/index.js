import Form from "react-bootstrap/Form"

export function ProductFilter() {

  return (
    <Form.Select style={{ maxWidth: '576px' }} aria-label="Categorias de produtos disponíveis para venda">
      <option value="1">Notebook</option>
      <option value="2">Impressora</option>
      <option value="3">Televisão</option>
    </Form.Select>
  )
}