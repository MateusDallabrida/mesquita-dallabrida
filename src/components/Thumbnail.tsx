import Image from "next/image"
import Link from "next/link"

export function Thumbnail() {
  return (
    <article className="flex flex-col gap-4">
      <div className="w-full aspect-square bg-gray-100 rounded-xl" />
      <p className="text-sm uppercase text-main font-bold">
        Tema
      </p>
      <Link
        href="/blog/1"
        className="text-lg font-bold text-gray-900 hover:text-main line-clamp-2"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae libero dolor...
      </Link>
      <div className="flex items-center gap-2">
        <Image
          src="/dallabrida_photo.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-6 h-6"
        />
        <p className="text-gray-900">Dallabrida</p>
        <p>•</p>
        <p>2023-10-06</p>
      </div>
    </article>
  )
}