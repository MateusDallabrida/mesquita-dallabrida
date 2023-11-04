interface Props {
  props: {
    topic: number
    description: React.ReactNode
    orientation: "left" | "right"
  }
}

export function TopicLP({ props }: Props) {
  const orientation = props.orientation === "left" ? "right" : "left"
  return (
    <div className="relative w-8 h-8 rounded-lg bg-main text-center text-second text-2xl font-bold">
      {props.topic}
      <div className={`absolute top-1/2 -translate-y-1/2 ${orientation}-8 w-24 h-[6px] bg-main`} />
      <div className={`absolute top-0 -translate-y-0 ${orientation}-36 w-[302px] text-${orientation} text-gray-800 text-base font-normal`}>
        {props.description}
      </div>
    </div>
  )
}