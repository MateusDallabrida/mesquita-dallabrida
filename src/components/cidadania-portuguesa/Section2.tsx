import Image from "next/image"

export function Section2() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
      <Image
        alt=""
        src="/porto.jpg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[368px] object-cover object-top rounded-md"
      />
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-main mb-8">
          Vantagens de obter a Nacionalidade Portuguesa
        </h2>
        <p className="text-lg mb-4">
          Ser um cidadão europeu;
        </p>
        <p className="text-lg mb-4">
          Ter a possibilidade de circular pelos 27 países do Espaço Schengen sem a exigência de visto;
        </p>
        <p className="text-lg mb-4">
          Ter acesso às melhores escolas e universidades do mundo pelo melhor preço;
        </p>
        <p className="text-lg mb-4">
          Mais facilidade em obter o visto para EUA, Japão e Canadá;
        </p>
        <p className="text-lg mb-4">
          Ter acesso a serviços de saúde com boa estrutura e qualidade.
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=351939559818`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-main text-white border border-main inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  )
}