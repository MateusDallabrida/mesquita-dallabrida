import { Card2 } from "@/components/landing-page/Card2"

export function Section4() {
  return (
    <section className="w-full bg-main">
      {/* Container */}
      <div className="max-w-5xl w-full mx-auto py-16 px-4 lg:px-16">
        <h2 className="text-4xl lg:text-5xl text-second font-bold leading-tight mb-6">
          Por que escolher o nosso escritório para ajudá-lo em seu processo de cidadania portuguesa?
        </h2>
        <p className="text-lg text-second mb-6">
          Nós realizamos o processo de solicitação de nacionalidade portuguesa desde o início até a conclusão do processo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6">
          <Card2 props={{
            title: "Atendimento personalizado",
            description: "Nós entendemos que cada cliente tem necessidades e situações diferentes. Oferecemos atendimento personalizado para cada solicitação de nacionalidade.",
            img: {
              src: "/landing-page/example_10.jpg",
              alt: ""
            }
          }} />
          <Card2 props={{
            title: "Expertise e Conhecimento",
            description: "Possuímos expertise e conhecimento nas leis portuguesas e nos trâmites para a solicitação de cidadania portuguesa.",
            img: {
              src: "/landing-page/example_11.webp",
              alt: ""
            }
          }} />
          <Card2 props={{
            title: "Transparência e Honestidade",
            description: "Acreditamos em relações transparentes e honestas com nossos clientes, buscando a melhor solução para a sua situação.",
            img: {
              src: "/landing-page/example_12.jpg",
              alt: ""
            }
          }} />
          <Card2 props={{
            title: "Agilidade e Eficiência",
            description: "Além de oferecer um atendimento personalizado e expertise em cidadania portuguesa, somos ágeis e eficientes na condução dos processos, garantindo que você obtenha a sua cidadania de forma rápida e segura.",
            img: {
              src: "/landing-page/example_13.webp",
              alt: ""
            }
          }} />
        </div>
      </div>
    </section>
  )
}