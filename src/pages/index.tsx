import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { OurTeam } from '@/components/OurTeam'
import { OurServices } from '@/components/OurServices'

export default function Home() {
  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[72px]">
        <Banner />
        <AboutUs />
        <OurTeam />
        <OurServices />
      </div>
    </>
  )
}
