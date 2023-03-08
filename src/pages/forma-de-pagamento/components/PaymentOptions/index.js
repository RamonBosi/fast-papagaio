import { Option } from "./Option";
import brandImage from '@/assets/img/brandImage/brandImage.png'
import pix from '@/assets/img/pix/pix.png'
import Image from "next/image";
import { ScButton } from "@/styles/styledComponents/components/Button";
import { primaryButton } from "@/styles/styledComponents/components/Button/theme/primaryButton";
import Link from "next/link";

export function PaymentOptions() {

  return (
    <div className='d-flex flex-column gap-2'>
      <div className='d-flex flex-column gap-2'>
        <Option
          optionId={'saldoFastPapagaio'}
          optionText='Saldo do FastPapagaio'
          icon={<Image
            src={brandImage}
            width={35}
            height={35}
            alt="Logo da empresa"
            css={`
            background-color: rgba(83, 62, 133);
            padding: 4px;
            border-radius: 20px;
          `}
          />}
        />
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