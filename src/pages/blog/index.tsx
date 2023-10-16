import { Communication } from "@/components/Communication"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from "@/components/Thumbnail"

export default function Blog() {
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
        <Footer />
      </div>
    </>
  )
}