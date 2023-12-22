import { Card2 } from "@/components/landing-page/Card2"

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

export function Section4({ landingPage, lpItems }: Props) {
  const session05 = [...lpItems].filter(lpItem => lpItem.type === "session05")

  return (
    <section className="w-full bg-main">
      {/* Container */}
      <div className="max-w-5xl w-full mx-auto py-16 px-4 lg:px-16">
        <h2 className="text-2xl lg:text-3xl text-second font-bold leading-tight mb-6">
          {landingPage.session05Heading1}
        </h2>
        <p className="text-base text-second mb-6">
          {landingPage.session05Description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6">
          {session05.map((item, index) => (
            <Card2 key={index} props={{
              title: item.title,
              description: item.description.raw,
              img: {
                src: item.image.url,
                alt: ""
              }
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}