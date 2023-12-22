import Image from "next/image"

import { RichText } from '@/components/RichText'

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

export function Section6({ landingPage, lpItems }: Props) {
  const session07 = [...lpItems].filter(lpItem => lpItem.type === "session07")
  const session08 = [...lpItems].filter(lpItem => lpItem.type === "session08")

  return (
    <section
      className="bg-scroll md:bg-fixed md:bg-cover bg-center h-full py-16"
      style={{ backgroundImage: "url('/landing-page/example_08.jpg')" }}
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto">
        {/* Content 1 */}
        <div className="bg-main rounded-xl py-12 px-4 lg:px-16 mb-16 mx-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-second mb-6">
            {landingPage.session07Heading1}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {session07.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-second mb-4">
                  {item.title}
                </h3>
                <div className="text-base text-second">
                  <RichText content={item.description.raw} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Content 2 */}
        <div className="bg-second rounded-xl mb-16 mx-6">
          <Image
            src={landingPage.session08Imagem.url}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-[225px] object-cover rounded-t-xl"
          />
          <div className="py-12 px-4 lg:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-main mb-6">
              {landingPage.session08Heading1}
            </h2>

            {session08.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-main mb-2">
                  {item.title}
                </h3>
                <div className="p-4 bg-[#D9D0C3] rounded text-lg mb-6 text-main">
                  <RichText content={item.description.raw} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Content 3 */}
        <div className="bg-second rounded-xl mb-16 flex flex-col-reverse md:flex-row mx-6">
          <div className="w-full py-12 lg:py-24 px-4 lg:px-16 bg-second rounded-bl-xl md:rounded-tl-xl rounded-br-xl md:rounded-br-none">
            <h2 className="text-2xl lg:text-3xl font-bold text-main leading-tight">
              {landingPage.session09Heading1}
            </h2>
            <a
              href={`https://api.whatsapp.com/send?phone=${landingPage.session09Phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-main text-white border border-main inline-block py-3 px-8 uppercase font-medium rounded mt-12 hover:bg-white hover:text-main transition-all"
            >
              Fale Conosco
            </a>
          </div>
          <Image
            src={landingPage.session09Image.url}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full md:w-2/5 h-[256px] md:h-auto object-cover object-bottom rounded-tl-xl md:rounded-tl-none rounded-tr-xl md:rounded-br-xl"
          />
        </div>
        {/* Content 4 */}
        <div className="flex flex-col md:flex-row mx-6">
          <div className="w-full bg-main px-8 lg:px-16 py-8 lg:py-16 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-second leading-tight mb-6">
              {landingPage.session10Heading1}
            </h2>
            {landingPage.session10Description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-2xl lg:text-3xl font-bold text-second leading-tight mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          <Image
            src={landingPage.session10Image.url}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full md:w-2/5 h-[350px] md:h-auto object-cover rounded-tr-none md:rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-bl-none"
          />
        </div>
      </div>
    </section>
  )
}