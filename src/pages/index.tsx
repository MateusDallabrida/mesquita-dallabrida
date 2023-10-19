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

import { getApresentation } from '@/utils/getApresentation'
import { getQualities } from '@/utils/getQualities'
import { getAboutUs } from '@/utils/getAboutUs'
import { getOurTeams } from '@/utils/getOurTeams'
import { getServices } from '@/utils/getServices'
import { getTestimonials } from '@/utils/getTestimonials'
import { getFaqs } from '@/utils/getFaqs'
import { getFooter } from '@/utils/getFooter'
import { getPosts } from '@/utils/getPosts'

export default function Home({ data }: any) {
  if (!data) return
  const {
    apresentation,
    qualities,
    aboutUs,
    ourTeams,
    services,
    testimonials,
    faqs,
    footer,
    posts
  } = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[72px]">
        <Banner apresentation={apresentation} qualities={qualities} />
        <AboutUs aboutUs={aboutUs} />
        <OurTeam ourTeams={ourTeams} />
        <OurServices services={services} />
        <Testimonials testimonials={testimonials} />
        <OurBlog posts={posts} />
        <Advantages />
        <FAQ faqs={faqs} />
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { apresentation } = await getApresentation()
  const { qualities } = await getQualities()
  const { aboutUs } = await getAboutUs()
  const { ourTeams } = await getOurTeams()
  const { services } = await getServices()
  const { testimonials } = await getTestimonials()
  const { faqs } = await getFaqs()
  const { footer } = await getFooter()
  const { posts } = await getPosts()

  return {
    props: {
      data: JSON.stringify({
        apresentation,
        qualities,
        aboutUs,
        ourTeams,
        services,
        testimonials,
        faqs,
        footer,
        posts
      }) || null
    }
  }
}