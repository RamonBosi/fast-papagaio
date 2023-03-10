import { Brand } from "@/components/Brand";
import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { ScButton } from "@/styles/styledComponents/components/Button";
import { secundaryButton } from "@/styles/styledComponents/components/Button/theme/secundaryButton";
import { Concert_One } from '@next/font/google'
import Link from "next/link";
import { useEffect } from "react";
import ConfettiGenerator from "confetti-js";
import brandoImage from '@/assets/img/brandImage/brandImage.png'

const fontConcertOne = Concert_One({ subsets: ['latin'], weight: ['400'] })

export default function Acknowledgment() {

  useEffect(() => {
    const confettiSettings = {"target":"my-canvas","max":"80","size":"1","animate":true,"props":["square",{"type":"svg","src":brandoImage,"size":25,"weight":1}],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":false,"width":"1366","height":"657","start_from_edge":true,"respawn":false}
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  
    return () => confetti.clear();
  }, [])

  return (
    <>
      <MyNavBar />
      <TagMain>
        <canvas id="my-canvas" ></canvas>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <div css={`
                padding: 13px;
                background-color: rgba(83, 62, 133);
                border-radius:50px;
              `}>
            <Brand size={70} withLink={false} showBrandName={false} />
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
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