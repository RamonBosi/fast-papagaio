import Form from "react-bootstrap/Form"
import { ScFilterProductsByCategory } from "./styles"

export function FilterProductsByCategory() {

  return (
    <ScFilterProductsByCategory>
      <Form.Select aria-label="Categorias de produtos disponíveis para venda">
        <option value="notebook">Notebook</option>
        <option value="impressora">Impressora</option>
        <option value="televisao">Televisão</option>
      </Form.Select>
    </ScFilterProductsByCategory>
  )
}