import Image from "next/image"
import brandImage from '@/assets/img/brandImage/brandImage.png'
import Link from "next/link"
import { Concert_One } from '@next/font/google'

const fontConcertOne = Concert_One({ subsets: ['latin'], weight: ['400'] })

export const Brand = ({
  size,
  keepFlexRow = true,
  showBrandName = true,
  withLink = true
}) => {

  const updateFlexRow = keepFlexRow ? '' : 'flex-column flex-sm-row'

  if (withLink) {

    return (
      <div>
        <Link
          passHref
          href='/'
          className={`d-flex ${updateFlexRow} align-items-center gap-1`}>
          <Image
            className="align-self-center"
            src={brandImage}
            width={size}
            height={size}
            alt="Logo da empresa Fast Papagaio"
          />
          {showBrandName && <p className={`${fontConcertOne.className} m-0 text-white fs-5`}>FastPapagaio</p>}
        </Link>
      </div>
    )
  }

  return (
    <div className={`d-flex ${updateFlexRow} align-items-center gap-1`}>
      <Image
        className="align-self-center"
        src={brandImage}
        width={size}
        height={size}
        alt="Logo da empresa Fast Papagaio"
      />
      {showBrandName && <p className={`${fontConcertOne.className} m-0 text-white fs-5`}>FastPapagaio</p>}
    </div>
  )
}