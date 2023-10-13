import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { OurTeam } from '@/components/OurTeam'

export default function Home() {
  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-14">
        <Banner />
        <AboutUs />
        <OurTeam />
      </div>
    </>
  )
}
