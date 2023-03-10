import { Option } from "./Option";
import pix from '@/assets/img/pix/pix.png'
import Image from "next/image";
import { ScButton } from "@/styles/styledComponents/components/Button";
import { primaryButton } from "@/styles/styledComponents/components/Button/theme/primaryButton";
import Link from "next/link";
import { Brand } from "@/components/Brand";

export function PaymentOptions() {

  return (
    <div className='d-flex flex-column gap-2'>
      <div className='d-flex flex-column gap-2'>
        <Option
          optionId={'saldoFastPapagaio'}
          optionText='Saldo do FastPapagaio'
          icon={
            <div css={`
                padding: 4px;
                background-color: rgba(83, 62, 133);
                border-radius:20px;
              `}>
              <Brand size={25} withLink={false} showBrandName={false} />
            </div>
          }/>
        <Option
          optionId={'pix'}
          optionText='Pix'
          icon={<Image
            src={pix}
            width={30}
            height={30}
            alt="Meio de pagamento Pix"
          />}
        />
        <Option
          optionId={'cartaoDeCredito'}
          optionText='Cartão de crédito'
          icon={<i className="bi bi-credit-card fs-4"></i>}
        />
        <Option
          optionId={'boleto'}
          optionText='Boleto'
          icon={<i className="bi bi-upc fs-3"></i>}
        />
      </div>
      <div className="align-self-end fs-4 mt-3">
        <Link href="/finalizar-compra" passHref>
          <ScButton theme={primaryButton}>Confirmar</ScButton>
        </Link>
      </div>
    </div>
  )
}