import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AboutUs } from '@/components/AboutUs'
import { getFooter } from '@/utils/getFooter'
import { getAboutUs } from '@/utils/getAboutUs'
import { Section1 } from '@/components/vistos/Section1'
import { Section2 } from '@/components/vistos/Section2'
import { Section3 } from '@/components/vistos/Section3'
import { getTestimonials } from '@/utils/getTestimonials'

interface Testimonial {
  name: string
  star: number
  description: string
  image: {
    url: string
  }
}

export default function Vistos({ data }: any) {
  if (!data) return
  const { footer, testimonials, aboutUs } = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <Section1 />
        <Section2 />
        <AboutUs aboutUs={aboutUs} />
        <Section3 testimonials={testimonials} />
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { testimonials } = await getTestimonials()
  const { aboutUs } = await getAboutUs()

  return {
    props: {
      data: JSON.stringify({
        footer,
        testimonials,
        aboutUs
      }) || null
    }
  }
}