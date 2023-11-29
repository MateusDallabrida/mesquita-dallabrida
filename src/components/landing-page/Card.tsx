interface Props {
  props: {
    title: string
    description?: string
    custom?: string
    icon?: React.ReactNode
  }
}

export function Card({ props }: Props) {
  return (
    <div className={`${props.custom} w-full bg-main rounded-md p-4`}>
      <div className="flex justify-between items-start">        
        <h3 className="w-full text-second text-lg sm:text-xl font-bold">
          {props.title}
        </h3>
        {props.icon}
      </div>
      {props.description && <p className="text-white text-base sm:text-lg mt-4">
        {props.description}
      </p>}
    </div>
  )
}