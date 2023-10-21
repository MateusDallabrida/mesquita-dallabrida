import { ReactNode } from "react"

interface Props {
  icon: ReactNode
  title: string
}

export function Advantage({ icon, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      {icon}
      <p className="text-base sm:text-xl text-white font-bold text-center">
        {title}
      </p>
    </div>
  )
}