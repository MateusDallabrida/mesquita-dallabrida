interface Props {
  props: {
    title: string
    description?: string
    custom?: string
  }
}

export function Card({ props }: Props) {
  return (
    <div className={`${props.custom} w-full bg-main rounded-md p-4`}>
      <h3 className="text-second text-[22px] font-bold">
        {props.title}
      </h3>
      {props.description && <p className="text-white text-lg mt-4">
        {props.description}
      </p>}
    </div>
  )
}