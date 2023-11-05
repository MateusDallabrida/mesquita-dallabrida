import { useState } from "react"

interface Props {
  props: {
    topic: number
    description: React.ReactNode
    orientation: "left" | "right"
  }
}

export function TopicLP({ props }: Props) {
  const [isLeft] = useState(props.orientation === "left" ? false : true)

  return (
    <div className="relative w-8 h-8 rounded-lg bg-main text-center text-second text-2xl font-bold">
      {props.topic}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "left-8" : "right-8"} w-0 sm:w-16 md:w-24 h-[6px] bg-main`} />
      <div className={`absolute top-0 -translate-y-0 ${isLeft ? "left-10 sm:left-28 md:left-36" : "right-10 sm:right-28 md:right-36"} w-[152px] md:w-[202px] lg:w-[302px] ${isLeft ? "text-left" : "text-right"} text-gray-800 text-sm sm:text-base font-normal`}>
        {props.description}
      </div>
    </div>
  )
}