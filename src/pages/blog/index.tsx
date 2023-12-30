import Head from 'next/head'

import { Communication } from "@/components/Communication"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from "@/components/Thumbnail"
import { Chat } from "@/components/landing-page/Chat"

import { getFooter } from '@/utils/getFooter'
import { getPosts } from '@/utils/getPosts'
import { getTags } from '@/utils/getTags'

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
  const { footer, posts, tags } = JSON.parse(data)

  const homeTags = tags.filter((tag: any) => tag.page === "Busca por Certidões")
  const title = homeTags.filter((homeTag: any) => homeTag.tag === "Title")[0]
  const metaDescription = homeTags.filter((homeTag: any) => homeTag.tag === "Meta Description")[0]

  return (
    <>
      <Head>
        <title>{title.value}</title>
        <meta name="description" content={metaDescription.value} />
      </Head>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <main className="max-w-7xl mx-auto px-4 xl:px-0 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <Thumbnail key={post.slug} post={post} />
          ))}
        </div>
        </main>
        <Footer footer={footer} />
      </div>
      <Chat />
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { posts } = await getPosts()
  const { tags } = await getTags()

  return {
    props: {
      data: JSON.stringify({
        footer,
        posts,
        tags
      }) || null
    }
  }
}