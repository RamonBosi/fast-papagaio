import { Brand } from "../Brand"
import { ScFooter } from "./styles"

export const MyFooter = () => {

  return (
    <ScFooter className="d-flex flex-column align-items-center gap-3 text-white p-3 pb-4">
      <Brand size={40} withLink={false} showBrandName={false} />
      <div className="d-flex gap-4 align-self-start fs-2">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
      </div>
      <div className="d-flex gap-2">
        <p className="fs-5">&copy;{new Date().getFullYear()}</p>
        <Brand size={18} withLink={false} />
      </div>
    </ScFooter>
  )
}