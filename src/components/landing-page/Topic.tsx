import Image from "next/image"
import { useState } from "react"

interface Props {
  props: {
    topic: number
    description: React.ReactNode
    orientation: "left" | "right"
    title?: string
    img?: {
      src: string
      alt: string
    }
    custom: string
  }
}

export function Topic({ props }: Props) {
  const [isLeft] = useState(props.orientation === "left" ? false : true)

  return (
    <div className="relative w-10 h-10 bg-main rounded-md z-10">
      <p className="text-[27px] font-bold text-second text-center">
        {props.topic}
      </p>
      <div className={`absolute ${isLeft ? "left-10" : "right-10"} top-1/2 -translate-y-1/2 w-[96px] h-[6px] bg-main`} />
      <span className={`${props.custom} absolute ${isLeft ? "left-[160px] text-left" : "right-[160px] text-right"} w-[300px] text-xl`}>
        {props.title && <div className="text-[22px] font-bold text-main mb-4">
          {props.title}
        </div>}
        {props.description}
        {props.img && <Image
          src={props.img.src}
          alt={props.img.alt}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full rounded-md mt-4"
        />}
      </span>
    </div>
  )
}