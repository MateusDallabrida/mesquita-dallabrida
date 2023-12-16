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
import { Chat } from '@/components/landing-page/Chat'
import { getInfos } from '@/utils/getInfos'
import { getFaqs } from '@/utils/getFaqs'

export default function Vistos({ data }: any) {
  if (!data) return
  const { footer, testimonials, aboutUs, infos, faqs } = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <Section1 infos={infos} />
        <Section2 infos={infos} faqs={faqs} />
        <AboutUs aboutUs={aboutUs} />
        <Section3 testimonials={testimonials} />
        <Footer footer={footer} />
      </div>
      <Chat />
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { testimonials } = await getTestimonials()
  const { aboutUs } = await getAboutUs()
  const { infos } = await getInfos()
  const { faqs } = await getFaqs()

  return {
    props: {
      data: JSON.stringify({
        footer,
        testimonials,
        aboutUs,
        infos,
        faqs
      }) || null
    }
  }
}