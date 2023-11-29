import Image from "next/image"

interface Props {
  props: {
    title: string
    description: string
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
        src={props.img.src}
        alt={props.img.alt}
        height={0}
        width={0}
        sizes="100vw"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold text-second">
        {props.title}
      </h3>
      <p className="text-base text-second">
        {props.description}
      </p>
    </div>
  )
}