import { GlobalStyles } from "@/styles/GlobalStyles"
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FastPapagaio</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
