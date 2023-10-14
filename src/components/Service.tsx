import Image from "next/image"

interface Props {
  srcImage: string
  altImage: string
  title: string
}

export function Service({ srcImage, altImage, title }: Props) {
  return (
    <div className="relative">
      <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
      <Image
        src={srcImage}
        alt={altImage}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
        {title}
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=351939559818"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
      >
        Fale Conosco
      </a>
    </div>
  )
}