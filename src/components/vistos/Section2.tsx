import { Acordeon } from "@/components/Acordeon"

interface Info {
  title: string
  description: string
  secondaryDescription?: string
  phone: string
  image: {
    url: string
  }
}

interface Faq {
  type: string
  answer: string
  question: string
}

interface Props {
  infos: Info[]
  faqs: Faq[]
}

export function Section2({ infos, faqs }: Props) {
  const info = [...infos].filter(info => info.title === "Conheça os diversos tipos de vistos de Portugal e saiba qual é melhor para o seu caso.")[0]
  const faqFilter = [...faqs].filter(faq => faq.type === "visa")

  return ( 
    <section className="bg-second">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-main mb-8">
            {info.title}
          </h2>
          <p className="text-lg mb-4">
            {info.description}
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=${info.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-main text-white border border-main inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
          >
            Fale Conosco
          </a>
        </div>
        <div className="flex flex-col gap-6">
          {faqFilter.map((faq: Faq) => (
            <Acordeon
              key={faq.question}
              title={faq.question}
              body={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}