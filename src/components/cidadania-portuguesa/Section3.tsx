import { Highlight } from "@/components/Highlight"
import { MdSearch, MdFlag, MdSource, MdCheckCircle, MdMap } from 'react-icons/md'

export function Section3() {
  return (
    <section className="bg-second">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-main">
          O seu processo de nacionalidade não precisa ser difícil.
        </h2>
        <p className="text-lg text-center">
          Entenda qual é a nossa parte, o passo a passo de tudo que vamos acompanhar e fazer por você.
        </p>
        <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-16 mt-8">
          <Highlight
            icon={<MdFlag className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Descobrir se você tem direito à nacionalidade;"
            body=""
          />
          <Highlight
            icon={<MdSource className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Reunir todos os documentos necessários;"
            body=""
          />
          <Highlight
            icon={<MdCheckCircle className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Verificar se a documentação está correta e cumpre todas as exigências da lei;"
            body=""
          />
          <Highlight
            icon={<MdSearch className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Realizar a conferência documental a fim de corrigir eventuais erros encontrados;"
            body=""
          />
          <Highlight
            icon={<MdMap className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Iniciar o processo de reconhecimento de cidadania;"
            body=""
          />
        </div>
      </div>

    </section>
  )
}