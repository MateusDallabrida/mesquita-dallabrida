import Image from "next/image"
import { BsFillStarFill } from "react-icons/bs"

export function Comments() {
  return (
    <div className="w-full bg-white rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/dallabrida_photo.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-8 h-8"
        />
        <p className="font-medium text-gray-900">Dallabrida</p>
      </div>

      <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque sollicitudin leo, vel posuere sem gravida ac. Nam vehicula libero sit amet sem placerat porttitor.</p>

      <div className="flex gap-2">
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
      </div>
    </div>
  )
}