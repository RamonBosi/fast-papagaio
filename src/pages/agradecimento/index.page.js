import { Brand } from "@/components/Brand";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { ScButton } from "@/styles/styledComponents/components/Button";
import { secundaryButton } from "@/styles/styledComponents/components/Button/theme/secundaryButton";
import { Concert_One } from '@next/font/google'
import Link from "next/link";
import { Confetti } from "./components/Confetti";

const fontConcertOne = Concert_One({ subsets: ['latin'], weight: ['400'] })

export default function Acknowledgment() {

  return (
    <>
      <MyNavBar />
      <TagMain>
          <Confetti 
            className={'position-fixed top-0 start-0 w-100 h-100'} 
            inlineStyle={{zIndex: '-1'}}/>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <div css={`
                padding: 13px;
                background-color: rgba(83, 62, 133);
                border-radius:50px;
              `}>
                <Brand size={70} withLink={false} showBrandName={false} />
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mb-4">
              <h1 className={`${fontConcertOne.className} align-self-center`}>Obrigado por comprar conosco !!</h1>
              <p>Caso tenha cadastrado o email para receber o relatório do resumo da compra, seu relatório já está disponível.</p>
              <p>Em breve seus produtos chegará.</p>
              <p>Até mais tarde !!</p>
              <div className="d-flex">
                <Link href='/' passHref>
                  <ScButton className="p-0 fs-5" theme={secundaryButton}>Voltar a comprar</ScButton>
                </Link>
              </div>
          </div>
      </TagMain>
    </>
  )
}