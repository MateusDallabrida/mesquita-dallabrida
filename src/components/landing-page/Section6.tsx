import Image from "next/image"

export function Section6() {
  return (
    <section
      className="bg-fixed bg-cover bg-center h-full py-16"
      style={{ backgroundImage: "url('/landing-page/example_08.jpg')" }}
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto">
        {/* Content 1 */}
        <div className="bg-main rounded-xl py-12 px-4 lg:px-16 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-second mb-6">
            Perguntas frequentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-bold text-second mb-4">
                Quanto tempo leva o processo?
              </h3>
              <p className="text-lg text-second">
                O processo pode variar de vários meses a alguns anos, dependendo da situação de cada cliente e da complexidade do caso.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-second mb-4">
                Quais são os documentos necessários?
              </h3>
              <p className="text-lg text-second">
                Os documentos necessários podem variar de acordo com a situação de cada cliente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-second mb-4">
                Eu preciso viajar para Portugal?
              </h3>
              <p className="text-lg text-second">
                Não, nós tomamos conta da solicitação e não há necessidade de o cliente viajar para Portugal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-second mb-4">
                Qual é a taxa de sucesso da solicitação?
              </h3>
              <p className="text-lg text-second">
                A taxa de sucesso varia de acordo com cada caso. No entanto, com nossa ajuda, temos altas chances de sucesso.
              </p>
            </div>
          </div>
        </div>
        {/* Content 2 */}
        <div className="bg-second rounded-xl mb-16">
          <Image
            src="/landing-page/example_13.jpg"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-[225px] object-cover rounded-t-xl"
          />
          <div className="py-12 px-4 lg:px-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-main mb-6">
              INVESTIMENTO
            </h2>
            <h3 className="text-lg font-bold text-main mb-2">
              Honorários advocatícios
            </h3>
            <div className="p-4 bg-[#D9D0C3] rounded mb-2">
              <p className="text-lg mb-6">
                Os <span className="text-main font-bold underline">honorários advocatícios</span> para a solicitação da sua <span className="text-main font-bold underline">cidadania portuguesa</span> são calculados com base na <span className="text-main font-bold underline">modalidade do processo</span>, considerando que para cada caso existem <span className="text-main font-bold underline">complexidades diferentes</span>.
              </p>
              <p className="text-lg">
                Oferecemos uma <span className="text-main font-bold underline">consulta virtual</span> para <span className="text-main font-bold underline">avaliar</span> o seu caso e fornecer um <span className="text-main font-bold underline">orçamento</span> do <span className="text-main font-bold underline">investimento necessário</span>.
              </p>
            </div>
            <h3 className="text-lg font-bold text-main mb-2">
              Taxas e emolumentos
            </h3>
            <div className="p-4 bg-[#D9D0C3] rounded mb-2">
              <p className="text-lg mb-6">
                Para iniciar o processo é <span className="text-main font-bold underline">necessário</span> realizar o <span className="text-main font-bold underline">pagamento</span> de uma <span className="text-main font-bold underline">taxa</span> à Conservatória em que o processo irá tramitar.
              </p>
              <p className="text-lg">
                <span className="text-main font-bold underline">As taxas variam</span> de acordo com a <span className="text-main font-bold underline">modalidade de cidadania</span> que está sendo requerida, mas costumam variar entre <span className="text-main font-bold underline">175€</span> para os processos de filho(a) e neto(a) e <span className="text-main font-bold underline">250€</span> para os demais casos.
              </p>
            </div>
            <h3 className="text-lg font-bold text-main mb-2">
              Documentos e apostilamentos
            </h3>
            <div className="p-4 bg-[#D9D0C3] rounded mb-2">
              <p className="text-lg mb-6">
                Os documentos necessários <span className="text-main font-bold underline">variam</span> de acordo com a <span className="text-main font-bold underline">modalidade do processo de nacionalidade</span> que está sendo requerido.
              </p>
              <p className="text-lg">
                No <span className="text-main font-bold underline">momento oportuno</span> o nosso escritório dará o <span className="text-main font-bold underline">direcionamento</span> correto para emissão dos <span className="text-main font-bold underline">documentos necessários</span> para o seu processo.
              </p>
            </div>
          </div>
        </div>
        {/* Content 3 */}
        <div className="bg-second rounded-xl mb-16 flex flex-col-reverse md:flex-row">
          <div className="w-full py-12 lg:py-24 px-4 lg:px-16 bg-second rounded-bl-xl md:rounded-tl-xl rounded-br-xl md:rounded-br-none">
            <h2 className="text-4xl lg:text-5xl font-bold text-main leading-tight">
              Contrate nossos serviços e realize o seu sonho de ser um cidadão português!
            </h2>
          </div>
          <Image
            src="/landing-page/example_14.jpg"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full md:w-1/3 h-[256px] md:h-auto object-cover rounded-tl-xl md:rounded-tl-none rounded-tr-xl md:rounded-br-xl"
          />
        </div>
        {/* Content 4 */}
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full bg-main px-8 lg:px-16 py-8 lg:py-16 rounded-bl-xl md:rounded-tl-xl rounded-br-xl md:rounded-br-none">
            <h2 className="text-4xl lg:text-5xl font-bold text-second leading-tight mb-6">
              Esperamos ter esclarecido os serviços e valores do investimento
            </h2>
            <p className="text-second text-[27px] leading-tight mb-6">
              Esperamos seu retorno para darmos andamento aos trabalhos. 
            </p>
            <p className="text-second text-[27px] leading-tight">
              Atenciosamente,
            </p>
          </div>
          <Image
            src="/landing-page/logo_2.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full md:w-1/3 h-[350px] md:h-auto rounded-tl-xl md:rounded-tl-none rounded-tr-xl md:rounded-br-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}