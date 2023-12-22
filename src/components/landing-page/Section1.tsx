import Image from "next/image"

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

interface Props {
  landingPage: LandingPage
}

export function Section1({ landingPage }: Props) {
  return (
    <section className="relative h-screen">
      <Image
        src="/landing-page/example_15.webp"
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover object-left"
      />
      <div className="absolute w-full h-full bg-[#343f2c] opacity-60" />
      {/* Container */}
      <div className="relative h-full max-w-5xl mx-auto px-4 lg:px-16 pb-4 flex flex-col items-center justify-center sm:gap-24 md:gap-32">
        {/* Content 1 */}
        <div className="h-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6">
          <Image
            alt="Logotipo da Mesquita e Dallabrida"
            src={landingPage.session01Logo.url}
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[256px] sm:w-[436px]"
          />
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl lg:text-2xl font-bold text-second text-center leading-tight">
              {landingPage.session01Slogan}
            </h2>
            <Image
              src={landingPage.session01Flag.url}
              alt=""
              height={0}
              width={0}
              sizes="100vw"
              className="w-32 sm:w-40"
            />
          </div>
        </div>
        {/* Content 2 */}
        <div className="p-4">
          {landingPage.session01Description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base md:text-lg font-bold text-second text-center pb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}