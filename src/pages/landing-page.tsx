import Image from "next/image"
import Link from "next/link"
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })
import { MdFamilyRestroom, MdHouse, MdLocationPin, MdStar, MdQuestionMark } from "react-icons/md"
import { GiBigDiamondRing } from "react-icons/gi"
import { CardLP } from "@/components/CardLP"
import { TopicLP } from "@/components/TopicLP"
import { ChatLP } from "@/components/ChatLP"

export default function LandingPage() {
  return (
    <div className={montserrat.className}>
      <section className="w-full relative">
        <Image
          src="/image_01.webp"
          alt="Imagem de Portugal"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute w-full h-full object-cover"
        />

        <div className="relative max-w-5xl w-full mx-auto py-32">
          <div className="w-[512px] flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-second">
              Obtenha a sua nacionalidade <span className="underline">Portuguesa</span> com a nossa ajuda!
            </h2>
            <p className="text-second">
              Se você quer obter sua cidadania portuguesa, nós estamos aqui para te ajudar.
            </p>
            <p className="text-second">
              Com anos de experiência e conhecimento profundo do processo, nós fornecemos serviços confiáveis e eficientes para te ajudar a tornar-se um cidadão português e consequentemente um cidadadão europeu.
            </p>
            <p className="text-second font-bold">
              Deixe-nos guiar você em cada etapa do processo.
            </p>
            <Link
              href="/#contact"
              className="mr-auto py-3 px-8 text-sm font-bold rounded-[4px] bg-second"
            >
              Fale Conosco
            </Link>
          </div>

          <Image
            src="/logo.webp"
            alt="Logo da empresa Mesquita & Dallabrida"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute top-0 right-0 w-[136px] aspect-square object-cover"
          />
        </div>
      </section>

      <section className="relative w-full">
        <Image
          src="/image_02.webp"
          alt="Imagem de Portugal"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-[#c7c3b0] opacity-80" />

        <div className="relative max-w-5xl w-full mx-auto py-32">
          <h2 className="text-4xl font-bold text-main text-center mb-6">
            Descubra o sonho de ser um cidadão europeu!
          </h2>
          <p className="text-2xl text-main text-center mb-6">
            Com a cidadania Portuguesa você poderá ter acesso a:
          </p>

          <div className="relative flex flex-col items-center space-y-[96px]">
            <div className="absolute w-[6px] h-full bg-main mx-auto" />
            
            <TopicLP props={{
              topic: 1,
              description: <p><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</p>,
              orientation: "right",
            }} />
            <TopicLP props={{
              topic: 2,
              description: <p><span className="font-bold">Oportunidades de trabalho</span> em qualquer país da União Europeia.</p>,
              orientation: "left",
            }} />
            <TopicLP props={{
              topic: 3,
              description: <p>Acesso a uma <span className="font-bold">educação de qualidade</span>.</p>,
              orientation: "right",
            }} />
            <TopicLP props={{
              topic: 4,
              description: <p>Sistema de saúde de <span className="font-bold">alto padrão</span>.</p>,
              orientation: "left",
            }} />
            <TopicLP props={{
              topic: 5,
              description: <p><span className="font-bold">Qualidade de vida!</span></p>,
              orientation: "right",
            }} />
            <TopicLP props={{
              topic: 6,
              description: <p>Segurança pública e <span className="font-bold">baixo nível de criminalidade</span></p>,
              orientation: "right",
            }} />
            <TopicLP props={{
              topic: 7,
              description: <p>Um dos 5 passaportes <span className="font-bold">mais poderosos do mundo!</span></p>,
              orientation: "left",
            }} />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#c7c3b0]">
        <div className="relative max-w-5xl w-full mx-auto py-32">
          <h2 className="text-4xl font-bold text-main text-center mb-6">
            Quem pode requerer a nacionalidade Portuguesa?
          </h2>
          <p className="text-2xl text-main text-center mb-6">
            Existem várias situações em que pode ser possível requerer a nacionalidade portuguesa.
          </p>

          <div className="max-w-3xl w-full mx-auto grid grid-cols-2 gap-12">
            <CardLP props={{
              title: "Pessoas com ascendência portuguesa",
              icon: <MdFamilyRestroom className="w-12 h-12 text-second" />,
              description: "Se você tiver pais ou avós portugueses, poderá ter direito à nacionalidade portuguesa."
            }} />
            <CardLP props={{
              title: "Residentes em Portugal",
              icon: <MdHouse className="w-12 h-12 text-second" />,
              description: "Se você estiver morando em Portugal legalmente por um determinado período de tempo, dependendo das circunstâncias, poderá ter direito à nacionalidade portuguesa."
            }} />
            <CardLP props={{
              title: "Cônjuges e parceiros de cidadãos portugueses",
              icon: <GiBigDiamondRing className="w-12 h-12 text-second" />,
              description: "Se você for casado(a) ou tiver união de fato com um cidadão português, poderá ter direito à nacionalidade portuguesa."
            }} />
            <CardLP props={{
              title: "Pais de cidadãos portugueses",
              icon: <MdFamilyRestroom className="w-12 h-12 text-second" />,
              description: "Se você for ascendente de um cidadão português, poderá ter direito à nacionalidade portuguesa."
            }} />
            <CardLP props={{
              title: "Nascidos em território nacional",
              icon: <MdLocationPin className="w-12 h-12 text-second" />,
              description: "Se você tiver filhos em Portugal, desde que cumprido alguns requisitos legais, saiba que seu filho poderá ser um cidadão português!"
            }} />
            <CardLP props={{
              title: "Descendentes de judeus sefarditas",
              icon: <MdStar className="w-12 h-12 text-second" />,
              description: "Se você for descendente de um cidadão português judeu sefardita, saiba que cumprido os requitos legais você poderá ter direito à nacionalidade portuguesa."
            }} />
            <CardLP props={{
              title: "Outras situações",
              icon: <MdQuestionMark className="w-12 h-12 text-second" />,
              description: "Há diversas outras questões que podem te garantir a cidadania portuguesa. Na dúvida consulte nossa equipe!",
              custom: "col-span-2"
            }} />
          </div>
        </div>
      </section>

      <ChatLP />
    </div>
  )
}
