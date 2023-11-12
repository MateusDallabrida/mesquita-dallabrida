interface Props {
  props: {
    title: string
    description: string
    custom?: string
  }
}

export function Card({ props }: Props) {
  return (
    <div className={`${props.custom} w-full bg-main rounded-md p-4`}>
      <h3 className="text-second text-[22px] font-bold mb-4">
        {props.title}
      </h3>
      <p className="text-white text-lg">
        {props.description}
      </p>
    </div>
  )
}