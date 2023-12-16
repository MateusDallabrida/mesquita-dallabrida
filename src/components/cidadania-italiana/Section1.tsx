import Image from "next/image"

interface Info {
  title: string
  description: string
  secondaryDescription?: string
  phone: string
  image: {
    url: string
  }
}

interface Props {
  infos: Info[]
}

export function Section1({ infos }: Props) {
  const info = [...infos].filter(info => info.title === "Te ajudamos a viver o seu sonho europeu!")[0]
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-main mb-8">
          {info.title}
        </h2>
        <p className="text-lg mb-4">
          {info.description}
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=${info.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-main text-white border border-main inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
        >
          Fale Conosco
        </a>
      </div>
      <Image
        alt=""
        src={info.image.url}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[368px] object-cover object-top rounded-md"
      />
    </section>
  )
}