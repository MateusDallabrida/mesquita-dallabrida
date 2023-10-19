import { Communication } from "@/components/Communication"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from "@/components/Thumbnail"

import { getFooter } from '@/utils/getFooter'

export default function Blog({ data }: any) {
  if (!data) return
  const footer = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[72px]">
        <main className="max-w-7xl mx-auto p-4 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
        </main>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()

  return {
    props: {
      data: JSON.stringify(footer) || null
    }
  }
}