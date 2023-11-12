import Image from "next/image"

import { Topic } from "@/components/landing-page/Topic"
import { Card } from "@/components/landing-page/Card"

export function Section2() {
  return (
    <section
      className="bg-fixed bg-cover bg-center h-full"
      style={{ backgroundImage: "url('/landing-page/example_01.jpg')" }}
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto py-12">
        {/* Content 1 */}
        <div className="bg-second rounded-xl pt-12 pb-64 px-16 mb-16">
          <h2 className="text-[45px] font-bold text-main text-center leading-tight mb-12">
            Descubra o sonho de ser um cidadão europeu!
          </h2>
          <Image
            src="/landing-page/example_03.webp"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-[100px] rounded-md mx-auto mb-12"
          />
          <h2 className="text-[45px] font-bold text-main text-center leading-tight mb-12">
            Com a cidadania portuguesa você poderá ter acesso a:
          </h2>

          {/* Timeline */}
          <div className="relative flex flex-col items-center space-y-[224px]">
            <div className="absolute w-[6px] h-full bg-main mx-auto" />
            <Topic props={{
              topic: 1,
              description: <span><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</span>,
              orientation: "right",
              img: {
                src: "/landing-page/example_04.jpg",
                alt: ""
              },
              custom: "top-1/2 -translate-y-1/2"
            }} />
            <Topic props={{
              topic: 2,
              description: <span><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</span>,
              orientation: "left",
              img: {
                src: "/landing-page/example_05.png",
                alt: ""
              },
              custom: "top-1/2 -translate-y-1/2"
            }} />
            <Topic props={{
              topic: 3,
              description: <span><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</span>,
              orientation: "right",
              img: {
                src: "/landing-page/example_06.webp",
                alt: ""
              },
              custom: "top-1/2 -translate-y-1/2"
            }} />
            <Topic props={{
              topic: 4,
              description: <span><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</span>,
              orientation: "left",
              img: {
                src: "/landing-page/example_07.jpg",
                alt: ""
              },
              custom: "top-1/2 -translate-y-1/2"
            }} />
            <Topic props={{
              topic: 5,
              description: <span><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</span>,
              orientation: "right",
              img: {
                src: "/landing-page/example_08.jpg",
                alt: ""
              },
              custom: "top-1/2 -translate-y-1/2"
            }} />
            <Topic props={{
              topic: 6,
              description: <span><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</span>,
              orientation: "left",
              img: {
                src: "/landing-page/example_01.jpg",
                alt: ""
              },
              custom: "top-1/2 -translate-y-1/2"
            }} />
            <Topic props={{
              topic: 7,
              description: <span><span className="font-bold">Livre circulação</span> pelos países da União Europeia. Viagens para os Estados Unidos e outros destinos, <span className="font-bold">sem precisar de um visto</span>.</span>,
              orientation: "right",
              img: {
                src: "/landing-page/example_09.jpg",
                alt: ""
              },
              custom: "top-1/2 -translate-y-1/2"
            }} />
          </div>
        </div>

        {/* Content 2 */}
        <div className="bg-second rounded-xl py-12 px-16">
          <h2 className="text-[45px] font-bold text-main text-center leading-tight mb-12">
            Quem pode requerer a nacionalidade portuguesa?
          </h2>
          <Image
            src="/landing-page/example_02.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-[100px] rounded-md mx-auto mb-12"
          />
          <p className="text-lg mb-4">
            Existem várias situações em que pode ser possível requerer a nacionalidade portuguesa.
          </p>
          
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card props={{
              title: "Pessoas com ascendência portuguesa",
              description: "Se você tiver pais ou avós portugueses, poderá ter direito à nacionalidade portuguesa."
            }} />
            <Card props={{
              title: "Residentes em Portugal",
              description: "Se você estiver morando em Portugal legalmente por um determinado período de tempo, dependendo das circunstâncias, poderá ter direito à nacionalidade portuguesa."
            }} />
            <Card props={{
              title: "Cônjuges e parceiros de cidadãos portugueses",
              description: "Se você for casado(a) ou tiver união de fato com um cidadão português, poderá ter direito à nacionalidade portuguesa."
            }} />
            <Card props={{
              title: "Pais de cidadãos portugueses",
              description: "Se você for ascendente de um cidadão português, poderá ter direito à nacionalidade portuguesa."
            }} />
            <Card props={{
              title: "Nascidos em território nacional",
              description: "Se você tiver filhos em Portugal, desde que cumprido alguns requisitos legais, saiba que seu filho poderá ser um cidadão português!"
            }} />
            <Card props={{
              title: "Descendentes de judeus sefarditas",
              description: "Se você for descendente de um cidadão português judeu sefardita, saiba que cumprido os requitos legais você poderá ter direito à nacionalidade portuguesa."
            }} />
            <Card props={{
              title: "Outras situações",
              description: "Há diversas outras questões que podem te garantir a cidadania portuguesa, na dúvida consulte nossa equipe!",
              custom: "col-span-2"
            }} />
          </div>
        </div>
      </div>
    </section>
  )
}