import Image from "next/image"

export function Section1() {
  return (
    <section
      className="bg-fixed bg-cover bg-center h-full"
      style={{ backgroundImage: "url('/landing-page/example_08.jpg')" }}
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto px-16 pb-32">
        {/* Content 1 */}
        <div className="h-screen flex flex-col items-center justify-center gap-6">
          <h2 className="text-[54px] font-bold text-second text-center leading-tight">
            Obtenha a sua <span className="underline">nacionalidade Portuguesa</span> com a nossa ajuda!
          </h2>
          <p className="text-4xl font-medium text-second text-center">
            Proposta de investimento para obtenção da Cidadania Portuguesa!
          </p>
          <Image
            src="/landing-page/example_02.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-40 h-40"
          />
        </div>
        {/* Content 2 */}
        <div className="bg-second rounded-md p-4">
          <p className="text-[27px] font-bold text-main text-justify pb-12">
            Se você quer obter sua cidadania portuguesa, nós estamos aqui para te ajudar.
          </p>
          <p className="text-[27px] font-bold text-main text-justify pb-12">
            Com anos de experiência e conhecimento profundo do processo, nós fornecemos serviços confiáveis e eficientes para te ajudar a tornar-se um cidadão português e consequentemente um cidadadão europeu. 
          </p>
          <p className="text-[27px] font-bold text-main text-justify">
            Deixe-nos guiar você em cada etapa do processo.
          </p>
        </div>
      </div>
    </section>
  )
}