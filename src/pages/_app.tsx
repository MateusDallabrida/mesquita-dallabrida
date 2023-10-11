import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'
import Head from 'next/head'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Head>
        <title>Mesquita & Dallabrida - Advocacia Internacional</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
