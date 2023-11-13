import Image from "next/image"
import { Topic } from "@/components/landing-page/Topic"

export function Section3() {
  return (
    <section className="relative w-full h-[1152px] md:h-screen flex flex-col justify-start items-center">
      <div className="absolute w-full h-full bg-second opacity-90" />
      <Image
        src="/landing-page/example_04.jpg"
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />

      {/* Container */}
      <div className="absolute max-w-5xl w-full mx-auto py-12">
        <h2 className="text-[45px] font-bold text-main text-center leading-tight mb-12">
          Etapas do processo de nacionalidade portuguesa
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-start md:items-center space-y-[270px] md:space-y-[64px] px-4 lg:px-16">
          <div className="absolute w-[6px] h-full bg-main mx-auto" />
          <Topic props={{
            topic: 1,
            title: "Toda a parte burocrática",
            description: "Nós realizamos para você, para que ao final você obtenha sua nacionalidade portuguesa sem se preocupar com as burocracias do processo.",
            orientation: "right",
            custom: "top-0"
          }} />
          <Topic props={{
            topic: 2,
            title: "Levantamento e busca de documentação",
            description: "É necessário realizar o levantamento e busca de toda a documentação necessária, a qual será analisada minuciosamente por nós assim que recebermos. Analisaremos cada caso de forma individual e personalizada, já que dependendo da situação, poderá ser necessário mais documentos e/ou procedimentos para garantir o sucesso durante todo o processo.",
            orientation: "left",
            custom: "top-0"
          }} />
          <Topic props={{
            topic: 3,
            title: "Conclusão das etapas e protocolo",
            description: "Passaremos o número do processo e o link competente para acompanhamento e consulta do processo, caso seja do seu interesse. Neste link, é possível acompanhar todas as etapas do seu processo e em havendo dúvidas, estaremos à disposição.",
            orientation: "right",
            custom: "top-0"
          }} />
        </div>
      </div>
    </section>
  )
}