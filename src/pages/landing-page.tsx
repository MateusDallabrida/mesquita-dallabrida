import { Inter } from 'next/font/google'
import Image from "next/image"

import { Section1 } from "@/components/landing-page/Section1"
import { Section2 } from "@/components/landing-page/Section2"
import { Section3 } from "@/components/landing-page/Section3"
import { Section4 } from "@/components/landing-page/Section4"
import { Chat } from "@/components/landing-page/Chat"
import { Section5 } from "@/components/landing-page/Section5"
import { Section6 } from "@/components/landing-page/Section6"

import { getLandingPage } from '@/utils/getLandingPage'
import { getLPItems } from '@/utils/getLPItems'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage2({ data }: any) {
  if (!data) return
  const { landingPage, lpItems } = JSON.parse(data)

  return (
    <div className={inter.className}>
      <Image
        alt="Logotipo da Mesquita e Dallabrida"
        src="/Logo_com-fundo_v2.jpg"
        height={0}
        width={0}
        sizes="100vw"
        className="fixed left-4 top-4 w-24 sm:w-36 md:w-48 z-20 rounded-3xl"
      />
      <Section1 landingPage={landingPage} />
      <Section2 landingPage={landingPage} lpItems={lpItems} />
      <Section3 landingPage={landingPage} lpItems={lpItems} />
      <Section4 landingPage={landingPage} lpItems={lpItems} />
      <Section5 landingPage={landingPage} lpItems={lpItems} />
      <Section6 landingPage={landingPage} lpItems={lpItems} />
      <Chat />
    </div>
  )
}

export async function getStaticProps() {
  const { landingPage } = await getLandingPage()
  const { lpItems } = await getLPItems()

  return {
    props: {
      data: JSON.stringify({ landingPage, lpItems }) || null
    }
  }
}