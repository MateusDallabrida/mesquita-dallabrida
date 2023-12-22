import Image from "next/image"

import { Topic } from "@/components/landing-page/Topic"
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

export function Section2({ landingPage, lpItems }: Props) {
  const session02 = [...lpItems].filter(lpItem => lpItem.type === "session02")
  const session03 = [...lpItems].filter(lpItem => lpItem.type === "session03")

  return (
    <section
      className="relative bg-scroll md:bg-fixed md:bg-cover bg-center h-full"
      style={{ backgroundImage: "url('/landing-page/example_01.jpg')" }}
    >
      <div className="absolute w-full h-full bg-main opacity-60" />
      {/* Container */}
      <div className="relative max-w-5xl mx-auto py-12">
        {/* Content 1 */}
        <div className="bg-second mx-6 rounded-xl pt-4 sm:pt-12 pb-8 sm:pb-24 px-0 lg:px-16 mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-main text-center leading-tight mb-6 lg:mb-12">
            {landingPage.session02Heading1}
          </h2>
          <Image
            src={landingPage.session02Flag.url}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-[100px] rounded-md mx-auto mb-6 lg:mb-12"
          />
          <h2 className="text-2xl lg:text-3xl font-bold text-main text-center leading-tight mb-32 mx-4 sm:mx-0">
            {landingPage.session02Heading2}
          </h2>

          {/* Timeline */}
          <div className="relative flex flex-col items-start md:items-center space-y-[300px] md:space-y-[150px] pl-6">
            <div className="absolute w-[6px] h-full bg-main mx-auto" />
            {session02.map((item, index) => (
              <Topic key={index} props={{
                topic: index + 1,
                description: item.description.raw,
                orientation: index % 2 === 0 ? "left": "right",
                img: {
                  src: item.image.url,
                  alt: ""
                },
                custom: "top-1/2 -translate-y-1/2"
              }} />
            ))}
          </div>
        </div>

        {/* Content 2 */}
        <div className="bg-second mx-6 rounded-xl py-12 px-4 lg:px-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-main text-center leading-tight mb-6">
            {landingPage.session03Heading1}
          </h2>
          <Image
            src={landingPage.session03Flag.url}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-[100px] rounded-md mx-auto mb-6"
          />
          <p className="text-lg mb-4">
            {landingPage.session03Description}
          </p>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {session03.map((item, index, array) => (
              <Card key={index} props={{
                icon: item.icon,
                title: item.title,
                description: item.description.raw,
                custom: index === array.length -1 ? "col-span-2" : "col-span-1"
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}