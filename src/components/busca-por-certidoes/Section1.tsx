import Image from "next/image"

export function Section1() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-main mb-8">
            Busca por Certidões
          </h2>
          <p className="text-lg mb-4">
            Somos especializados em assessoria ao reconhecimento das Cidadanias Italiana e Portuguesa, diversos tipos de serviços consulares, e também realizamos o auxilio e a assessoria completa na obtenção de Vistos para diversos tipos de países.
          </p>
          <p className="text-lg">
            Caso você não conheça o local exato de nascimento/batismo e casamento dos seus antepassados é necessário fazer a pesquisa do registro, ou seja, é preciso encontrar o livro onde o nascimento/ batismo e casamento foram registrados.
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
        <Image
          alt=""
          src="/buscas.webp"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full rounded-md"
        />
      </div>
    </section>
  )
}