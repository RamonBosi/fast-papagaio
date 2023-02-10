import Form from "react-bootstrap/Form"
import { Brand } from "@/components/Brand"
import { ScHeader } from "./styles"
import Link from "next/link"

export const MyNavBar = () => {

  return (
    <ScHeader className="d-flex justify-content-between align-items-center p-3 gap-2">
      <Brand size={40} />
      <Form.Select style={{ maxWidth: '576px' }} aria-label="Categorias de produtos disponíveis para venda">
        <option value="1">Notebook</option>
        <option value="2">Impressora</option>
        <option value="3">Televisão</option>
      </Form.Select>
      <div>
        <Link passHref href="/carrinho-de-compra">
          <i className="bi bi-cart-fill text-white p-1 fs-4"></i>
        </Link>
      </div>
    </ScHeader>
  )
}