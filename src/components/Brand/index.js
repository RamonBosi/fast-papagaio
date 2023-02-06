import Image from "next/image"
import brandImage from '@/assets/brandImage/brandImage.png'
import Link from "next/link"
import { Itim } from '@next/font/google'

const Fonte = Itim({ subsets: ['latin'], weight: ['400'] })

export const Brand = ({ size }) => {

  return (
    <div>
      <Link passHref={true} href='/' className="d-flex">
        <Image
          src={brandImage}
          width={size}
          height={size}
          alt="Logo da empresa"
        />
        <p className={`${Fonte.className} m-0`}>FastPapagaio</p>
      </Link>
    </div>
  )
}