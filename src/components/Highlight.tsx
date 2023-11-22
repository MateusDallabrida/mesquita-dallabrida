import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  title: string
  body: string
}

export function Highlight({ icon, title, body }: Props) {
  return (
    <div className="max-w-[368px] w-full h-[200px] md:h-[260px] lg:h-[220px] xl:h-[200px] bg-white rounded shadow-md relative">
      <div className="w-[100px] h-[100px] rounded-full bg-white shadow-md absolute left-[calc(50%-50px)] top-[-50px]">
        {icon}
      </div>
      <div className="w-full h-[calc(100%-50px)] absolute bottom-0 pt-4 px-6 pb-6">
        <p className="text-lg text-center font-bold text-main">
          {title}
        </p>
        <p className="text-base text-center text-gray-900 mt-4">
          {body}
        </p>
      </div>
    </div>
  )
}