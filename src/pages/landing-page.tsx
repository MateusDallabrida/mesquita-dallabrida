import { Inter } from 'next/font/google'

import { Section1 } from "@/components/landing-page/Section1"
import { Section2 } from "@/components/landing-page/Section2"
import { Section3 } from "@/components/landing-page/Section3"
import { Section4 } from "@/components/landing-page/Section4"
import { Chat } from "@/components/landing-page/Chat"
import { Section5 } from "@/components/landing-page/Section5"

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage2() {
  return (
    <div className={inter.className}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Chat />
    </div>
  )
}