
import { Brand } from "@/components/Brand";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";


export default function Acknowledgment() {

  return (
    <>
      <MyNavBar />
      <TagMain>
        <div>
          <div>
           <Brand withLink={false} showBrandName={false}/>
          </div>
        </div>
        <h1>Obrigado por comprar conosco !!</h1>
        <p>Caso tenha cadastrado o email para receber o relatório do resumo da compra, seu relatório já está disponível </p>
        <p>Em breve seus produtos chegará</p>
        <p>Até mais tarde !!</p>
      </TagMain>
    </>
  )
}