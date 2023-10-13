import Image from "next/image"

export function AboutUs() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-5xl font-bold uppercase text-main text-center">
          Sobre Nós
        </h2>

        <div className="mt-12 md:grid grid-cols-2 gap-8 lg:gap-12 px-4 xl:px-0">
          <Image
            src="/about_us.jpeg"
            alt="Os advogados Mateus e Cássia estão exibindo um livro de direito"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full max-h-[640px] object-cover rounded-tl-[64px] rounded-tr rounded-br-[64px] rounded-bl"
          />

          <div className="w-full">
            <p className="text-lg lg:text-xl leading-7 lg:leading-8 text-gray-900 mt-6 lg:mt-12">
              Nosso escritório nasceu do sonho de um casal de advogados em morar na Europa e ajudar você e sua família a realizar esse sonho também.
            </p>
            <p className="text-lg lg:text-xl leading-7 lg:leading-8 text-gray-900 mt-6 lg:mt-12">
              Atuamos de forma personalizada para que você e sua família imigrem de forma legal e planejada!            </p>
            <p className="text-lg lg:text-xl leading-7 lg:leading-8 text-gray-900 mt-6 lg:mt-12">
              Sabemos que quando se trata de processos de imigração, você e a sua família precisam de alguém em quem possam confiar.
            </p>
            <p className="text-lg lg:text-xl leading-7 lg:leading-8 text-gray-900 mt-6 lg:mt-12">
              Nossa equipe possui o conhecimento e a experiência necessários neste delicado processo, solucionando de forma ágil e diligente.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
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