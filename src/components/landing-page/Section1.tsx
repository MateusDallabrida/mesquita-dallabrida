import Image from "next/image"

export function Section1() {
  return (
    <section
      className="relative">
      <Image
        src="/landing-page/example_15.webp"
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="absolute w-full h-full"
      />
      <div className="absolute w-full h-full bg-[#343f2c] opacity-60" />
      {/* Container */}
      <div className="relative max-w-5xl mx-auto px-4 lg:px-16 pb-32">
        {/* Content 1 */}
        <div className="h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6">
          <Image
            alt="Logotipo da Mesquita e Dallabrida"
            src="/Logo_Branca_sem-fundo.png"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[256px] sm:w-[436px]"
          />
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl lg:text-2xl font-bold text-second text-center leading-tight">
              Obtenha a sua <span className="underline">nacionalidade Portuguesa</span> com a nossa ajuda!
            </h2>
            <p className="text-lg lg:text-xl font-medium text-second text-center">
              Proposta de investimento para obtenção da Cidadania Portuguesa!
            </p>
            <Image
              src="/portugal_flag.png"
              alt=""
              height={0}
              width={0}
              sizes="100vw"
              className="w-32 sm:w-40"
            />
          </div>
        </div>
        {/* Content 2 */}
        <div className="bg-second rounded-md p-4">
          <p className="text-lg lg:text-xl font-bold text-main text-justify pb-6 lg:pb-12">
            Se você quer obter sua cidadania portuguesa, nós estamos aqui para te ajudar.
          </p>
          <p className="text-lg lg:text-xl font-bold text-main text-justify pb-6 lg:pb-12">
            Com anos de experiência e conhecimento profundo do processo, nós fornecemos serviços confiáveis e eficientes para te ajudar a tornar-se um cidadão português e consequentemente um cidadadão europeu. 
          </p>
          <p className="text-lg lg:text-xl font-bold text-main text-justify">
            Deixe-nos guiar você em cada etapa do processo.
          </p>
        </div>
      </div>
    </section>
  )
}