import { ContextFilterProductsByCategory } from "@/store/ContextFilterProductsByCategory"
import { useContext } from "react"
import Form from "react-bootstrap/Form"
import { ScFilterProductsByCategory } from "./styles"

export function FilterProductsByCategory() {

  const { setProductCategory } = useContext(ContextFilterProductsByCategory)

  const handlerProductCategory = (e) => {
    setProductCategory(e.target.value)
  }

  return (
    <ScFilterProductsByCategory>
      <Form.Select onChange={handlerProductCategory} aria-label="Categorias de produtos disponíveis para venda">
        <option value="notebook">Notebook</option>
        <option value="impressora">Impressora</option>
        <option value="televisao">Televisão</option>
      </Form.Select>
    </ScFilterProductsByCategory>
  )
}