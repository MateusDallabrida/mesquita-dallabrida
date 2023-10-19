import { Acordeon } from "@/components/Acordeon"

interface Faq {
  answer: string
  question: string
}

interface Props {
  faqs: Faq[]
}

export function FAQ({ faqs }: Props) {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 px-4 xl:px-0 grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-xl text-gray-900 font-bold">
            FAQ
          </p>
          <p className="text-4xl text-gray-900 font-bold">
            Tudo o que você precisa saber sobre a Mesquita & Dallabrida
          </p>
          <p className="text-gray-900">
            Ainda tem alguma dúvida? Fale conosco pelo
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-main font-bold hover:underline underline-offset-4"
            >
              WhatsApp
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq: Faq) => (
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