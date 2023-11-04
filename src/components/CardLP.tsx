interface Props {
  props: {
    title: string
    icon: React.ReactNode
    description: string
    custom?: string
  }
}

export function CardLP({ props }: Props) {
  return (
    <div className={`${props.custom} bg-main p-4 text-second`}>
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-lg">
          {props.title}
        </p>
        {props.icon}
      </div>
      <p>
        {props.description}
      </p>
    </div>
  )
}