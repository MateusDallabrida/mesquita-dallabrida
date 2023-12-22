import Image from "next/image"
import { RichText } from '@/components/RichText'

interface Props {
  props: {
    title: string
    description: any
    img: {
      src: string
      alt: string
    }
  }
}

export function Card2({ props }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={props.img?.src}
        alt={props.img.alt}
        height={0}
        width={0}
        sizes="100vw"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold text-second">
        {props.title}
      </h3>
      <div className="text-base text-second">
        <RichText content={props.description} />
      </div>
    </div>
  )
}