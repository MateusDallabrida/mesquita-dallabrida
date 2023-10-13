import Image from "next/image"
import { MdLocationOn } from "react-icons/md"

export function OurTeam() {
  return (
    <section className="bg-second">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-5xl font-bold uppercase text-main text-center">
          Nossa Equipe
        </h2>

        <div className="mt-12 md:grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 items-center">
            <Image
              src="/dallabrida_photo.png"
              alt="Foto de perfil do doutor Mateus Dallabrida"
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 rounded-full bg-white"
            />

            <div>
              <strong className="text-2xl font-bold text-main uppercase">
                Mateus Dallabrida
              </strong>
              <p className="text-gray-900 uppercase text-center mt-2">
                Advocacia Imigratória
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <MdLocationOn className="w-8 h-8 text-main" />
              <p className="text-main font-bold uppercase">
                Portugal
              </p>
            </div>

            <p className="text-lg text-gray-900 leading-8 text-justify px-8">
              Advogado no Brasil e em Portugal, com atuação em questões relacionadas à nacionalidade Portuguesa, Italiana e questões migratórias em Portugal. Mestrando em Direito - FDUL. Pós-graduado em Mediação, Arbitragem e processo civil - PUCPR e LL.M em GDPR e LGPD pela FMP-RS e FDUL, tendo concluído o curso de Direito na PUCPR.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center mt-12 md:mt-0">
            <Image
              src="/mesquita_photo.png"
              alt="Foto de perfil da doutora Cássia Mesquita"
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 rounded-full bg-white"
            />

            <div>
              <strong className="text-2xl font-bold text-main uppercase">
              Cássia Mesquita
              </strong>
              <p className="text-gray-900 uppercase text-center mt-2">
                Advocacia Imigratória
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <MdLocationOn className="w-8 h-8 text-main" />
              <p className="text-main font-bold uppercase">
                Portugal
              </p>
            </div>

            <p className="text-lg text-gray-900 leading-8 text-justify px-8">
            Advogada no Brasil e em Portugal, com atuação em questões relacionadas à nacionalidade Portuguesa, Italiana e questões migratórias em Portugal. Pós-graduada em Direito Tributário - PUCPR e LL.M em GDPR e LGPD pela FMP-RS e FDUL, tendo concluído seu curso de Direito na PUCPR.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}