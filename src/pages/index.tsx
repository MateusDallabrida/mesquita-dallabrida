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
// import { getQualities } from '@/utils/getQualities'
// import { getAboutUs } from '@/utils/getAboutUs'

export default function Home({ data }: any) {
  if (!data) return
  const { apresentation } = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[72px]">
        <Banner apresentation={apresentation} />
        {/* <AboutUs aboutUs={aboutUs} /> */}
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
  const apresentation = await getApresentation()

  return {
    props: {
      data: JSON.stringify(apresentation) || null
    }
  }
}

// export async function getStaticProps() {
//   const { apresentation } = await getApresentation()
//   const { qualities } = await getQualities()
//   const { aboutUs } = await getAboutUs()

//   return {
//     props: {
//       data: JSON.stringify({
//         apresentation,
//         qualities,
//         aboutUs
//       }) || null
//     }
//   }
// }