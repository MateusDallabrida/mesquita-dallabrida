import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AboutUs } from '@/components/AboutUs'
import { Section1 } from '@/components/busca-por-certidoes/Section1'
import { Section2 } from '@/components/busca-por-certidoes/Section2'
import { Section3 } from '@/components/busca-por-certidoes/Section3'

import { getFooter } from '@/utils/getFooter'
import { getTestimonials } from '@/utils/getTestimonials'
import { getAboutUs } from '@/utils/getAboutUs'

export default function BuscaPorCertidoes({ data }: any) {
  if (!data) return
  const { footer, testimonials, aboutUs } = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <Section1 />
        <Section2 />
        <Section3 testimonials={testimonials} />
        <AboutUs aboutUs={aboutUs} />
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