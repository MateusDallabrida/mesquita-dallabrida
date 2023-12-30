import { Inter } from 'next/font/google'
import Head from 'next/head'
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
import { getTags } from '@/utils/getTags'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage2({ data }: any) {
  if (!data) return
  const { landingPage, lpItems, tags } = JSON.parse(data)

  const homeTags = tags.filter((tag: any) => tag.page === "Início")
  const title = homeTags.filter((homeTag: any) => homeTag.tag === "Title")[0]
  const metaDescription = homeTags.filter((homeTag: any) => homeTag.tag === "Meta Description")[0]

  return (
    <div className={inter.className}>
      <Head>
        <title>{title.value}</title>
        <meta name="description" content={metaDescription.value} />
      </Head>
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
  const { tags } = await getTags()

  return {
    props: {
      data: JSON.stringify({ landingPage, lpItems, tags }) || null
    }
  }
}