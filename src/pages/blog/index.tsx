import { Communication } from "@/components/Communication"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from "@/components/Thumbnail"

import { getFooter } from '@/utils/getFooter'
import { getPosts } from '@/utils/getPosts'

interface Post {
  author: string
  date: string
  slug: string
  title: string
  image: {
    url: string
  }
  body: {
    raw: any
  }
  tag: string
  authorPhoto: {
    url: string
  }
}

export default function Blog({ data }: any) {
  if (!data) return
  const { footer, posts } = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <main className="max-w-7xl mx-auto p-4 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <Thumbnail key={post.slug} post={post} />
          ))}
        </div>
        </main>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { posts } = await getPosts()

  return {
    props: {
      data: JSON.stringify({
        footer,
        posts
      }) || null
    }
  }
}