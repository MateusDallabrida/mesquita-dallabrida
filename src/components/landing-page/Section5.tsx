import { FaHeadset, FaExclamationCircle } from "react-icons/fa"
import { MdCheckCircle, MdFolder } from "react-icons/md"

import { Card } from "@/components/landing-page/Card"

interface LandingPage {
  title: string
  session01Logo: {
    url: string
  }
  session01Slogan: string
  session01Flag: {
    url: string
  }
  session01Description: string
  session02Heading1: string
  session02Flag: {
    url: string
  }
  session02Heading2: string
  session03Heading1: string
  session03Flag: {
    url: string
  }
  session03Description: string
  session04Heading1: string
  session05Heading1: string
  session05Description: string
  session06Heading1: string
  session06Description: string
  session07Heading1: string
  session08Imagem: {
    url: string
  }
  session08Heading1: string
  session09Heading1: string
  session09Image: {
    url: string
  }
  session09Phone: string
  session10Heading1: string
  session10Description: string
  session10Image: {
    url: string
  }
}

interface LPItems {
  type: string
  title: string
  description: {
    raw: any
  }
  image: {
    url: string
  }
  icon: string
}

interface Props {
  landingPage: LandingPage
  lpItems: LPItems[]
}

export function Section5({ landingPage, lpItems }: Props) {
  const session06 = [...lpItems].filter(lpItem => lpItem.type === "session06")

  return (
    <section
      className="bg-scroll md:bg-fixed bg-contain md:bg-cover bg-center h-full py-32"
      style={{ backgroundImage: "url('/landing-page/example_16.jpg')" }}
    >
      {/* Container */}
      <div className="max-w-5xl mx-6 sm:mx-auto bg-second rounded-xl py-12 px-4 md:px-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-main mb-6">
          {landingPage.session06Heading1}
        </h2>
        <p className="text-base mb-6">
          {landingPage.session06Description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {session06.map((item, index, array) => (
            <Card key={index} props={{
              icon: item.icon,
              title: item.title,
              description: item.description.raw,
              custom: index === array.length -1 ? "col-span-2" : "col-span-1"
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}