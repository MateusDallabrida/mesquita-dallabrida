import Image from "next/image"

interface Props {
  aboutUs: {
    image: {
      url: string
    }
    phone: number
    description: string
  }
}

export function AboutUs({ aboutUs }: Props) {
  return (
    <section id="about-us">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-4xl sm:text-5xl font-bold uppercase text-main text-center">
          Sobre Nós
        </h2>

        <div className="mt-8 sm:mt-12 md:grid grid-cols-2 gap-8 lg:gap-12 px-4 xl:px-0">
          <div className="relative w-full h-full md:max-h-[640px]">
            <Image
              src={aboutUs.image.url}
              alt="Os advogados Mateus e Cássia estão exibindo um livro de direito"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-full h-full object-cover rounded-tl-[64px] rounded-tr rounded-br-[64px] rounded-bl"
            />
            <div className="absolute -left-4 -bottom-4 -z-10 w-full h-full rounded-tl-[64px] rounded-tr rounded-br-[64px] rounded-bl bg-main" />
          </div>

          <div className="w-full mt-12 md:mt-0">
            {aboutUs.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg lg:text-xl leading-7 lg:leading-8 text-gray-900 mt-4 sm:mt-6 lg:mt-12">
                {paragraph}
              </p>
            ))}
            <a
              href={`https://api.whatsapp.com/send?phone=${aboutUs.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-main text-white inline-block py-3 px-8 uppercase font-medium rounded mt-6 lg:mt-12 hover:bg-white hover:text-main border border-main transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}