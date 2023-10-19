import { Testimonial } from '@/components/Testimonial'

interface Testimonial {
  name: string
  star: number
  description: string
  image: {
    url: string
  }
}

interface Props {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: Props) {
  return (
    <section className="bg-second">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-5xl font-bold uppercase text-main text-center">
          Depoimentos
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-4 md:gap-12 px-4 xl:px-0">
          {testimonials.map((testimonial: Testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}