import { Acordeon } from "@/components/Acordeon"

interface Faq {
  type: string
  answer: string
  question: string
}

interface Props {
  faqs: Faq[]
}

export function Section2({ faqs }: Props) {
  const faqFilter = [...faqs].filter(faq => faq.type === "who-is-entitled")

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-main text-center mb-8">
          Quem tem direito?
        </h2>
        
        {faqFilter.map((faq: Faq) => (
          <Acordeon
            key={faq.question}
            title={faq.question}
            body={faq.answer}
          />
        ))}
      </div>
    </section>
  )
}