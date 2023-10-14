import { Thumbnail } from '@/components/Thumbnail'

export function OurBlog() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-5xl font-bold uppercase text-main text-center">
          Nosso Blog
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 xl:px-0">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
    </section>
  )
}