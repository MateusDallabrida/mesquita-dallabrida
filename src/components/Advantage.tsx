import { ReactNode } from "react"

interface Props {
  icon: ReactNode
  title: string
}

export function Advantage({ icon, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      {icon}
      <p className="text-xl text-main uppercase text-center">
        {title}
      </p>
    </div>
  )
}