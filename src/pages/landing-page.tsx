import { Inter } from 'next/font/google'
import Image from "next/image"

import { Section1 } from "@/components/landing-page/Section1"
import { Section2 } from "@/components/landing-page/Section2"
import { Section3 } from "@/components/landing-page/Section3"
import { Section4 } from "@/components/landing-page/Section4"
import { Chat } from "@/components/landing-page/Chat"
import { Section5 } from "@/components/landing-page/Section5"
import { Section6 } from "@/components/landing-page/Section6"

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage2() {
  return (
    <div className={inter.className}>
      <Image
        src="/landing-page/logo_2.png"
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="fixed left-4 bottom-4 w-24 z-20"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Chat />
    </div>
  )
}