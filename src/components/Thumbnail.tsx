import Image from "next/image"
import Link from "next/link"

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
  post: Post
}

export function Thumbnail({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} >
      <article className="flex flex-col gap-3 sm:gap-4">
        <Image
          src={post.image.url}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full aspect-video bg-gray-100 rounded-xl object-cover"
        />
        <p className="text-sm uppercase text-main font-bold">
          {post.tag}
        </p>
        <h2 className="text-lg font-bold text-gray-900 hover:text-main line-clamp-2">
          {post.title}
        </h2>
        <div className="flex items-center gap-2">
          <Image
            src={post.authorPhoto.url}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6"
          />
          <p className="text-gray-900">
            {post.author}
          </p>
        </div>
      </article>
    </Link>
  )
}