import { Brand } from "@/components/Brand"
import Link from "next/link"
import { useRouter } from "next/router"

export default function PageNotFound() {

  const router = useRouter()

  return (
    <div className="mt-4 p-2 mx-auto" css={`max-width: 600px;`}>
      <div className="d-flex flex-column gap-3 align-items-center">
        <div className="d-flex">
          <div className="p-3 rounded-circle" css={`background-color: var(--elements-background-color);`}>
            <Brand size={70} showBrandName={false} />
          </div>
        </div>
        <h1>Página não encontrada</h1>
        <div className="d-flex flex-column gap-2 align-self-start">
          <Link href={router.reload()}>Tentar novamente</Link>
          <Link href={`/`}>Voltar para a página inicial</Link>
        </div>
      </div>
    </div>
  )
}