import { useState } from 'react'

interface Props {
  title: string
  body: string
}

export function Acordeon({ title, body }: Props) {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => setShow(prev => !prev)}
        className="flex justify-between items-center bg-main p-4 sm:p-6 rounded-md text-white cursor-pointer"
      >
        <p className="text-sm sm:text-base">
          {title}
        </p>
        <p className="text-4xl sm:text-5xl leading-6">+</p>
      </div>
      {show && (
        <p className="px-6 text-sm sm:text-base text-gray-900 text-justify">
          {body}
        </p>
      )}
    </div>
  )
}