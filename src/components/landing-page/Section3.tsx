import Image from "next/image"
import { Topic } from "@/components/landing-page/Topic"

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

export function Section3({ landingPage, lpItems }: Props) {
  const session04 = [...lpItems].filter(lpItem => lpItem.type === "session04")

  return (
    <section className="relative w-full h-[1024px] md:h-[700px] flex flex-col justify-start items-center">
      <div className="absolute w-full h-full bg-second opacity-906" />
      <Image
        src="/landing-page/example_04.jpg"
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />

      {/* Container */}
      <div className="absolute max-w-5xl w-full mx-auto py-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-main text-center leading-tight mb-12">
          {landingPage.session04Heading1}
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-start md:items-center space-y-[240px] md:space-y-[64px] pl-8 lg:px-16">
          <div className="absolute w-[6px] h-full bg-main mx-auto" />
          {session04.map((item, index) => (
            <Topic key={index} props={{
              topic: index + 1,
              title: item.title,
              description: item.description.raw,
              orientation: index % 2 === 0 ? "left": "right",
              custom: "top-0"
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}