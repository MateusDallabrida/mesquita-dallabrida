import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { OurTeam } from '@/components/OurTeam'
import { OurServices } from '@/components/OurServices'
import { Testimonials } from '@/components/Testimonials'
import { OurBlog } from '@/components/OurBlog'
import { Advantages } from '@/components/Advantages'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

import { getApresentations } from '@/utils/getApresentations'

export default function Home({ data }: any) {
  if (!data) return
  const { apresentations } = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[72px]">
        <Banner apresentation={apresentations[0]} />
        <AboutUs />
        <OurTeam />
        <OurServices />
        <Testimonials />
        <OurBlog />
        <Advantages />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const apresentations = await getApresentations()

  return {
    props: {
      data: JSON.stringify(apresentations) || null
    }
  }
}