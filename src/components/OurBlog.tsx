import { Thumbnail } from '@/components/Thumbnail'

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

interface Props {
  posts: Post[]
}

export function OurBlog({ posts }: Props) {
  const handlePosts = () => {
    const thumbnails: any = []
    for (let i = 0; i < 3; i++) {
      thumbnails.push(
        <Thumbnail key={posts[i].slug} post={posts[i]} />
      )
    }
    return thumbnails
  } 

  return (
    <section>
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-5xl font-bold uppercase text-main text-center">
          Nosso Blog
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 xl:px-0">
          {handlePosts()}
        </div>
      </div>
    </section>
  )
}