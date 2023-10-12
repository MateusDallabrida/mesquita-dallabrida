import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'

export default function Home() {
  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-14">
        <Banner />
      </div>
    </>
  )
}
