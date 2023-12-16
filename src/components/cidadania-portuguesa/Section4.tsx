import Image from "next/image"
import { RiArrowRightSFill } from "react-icons/ri"

interface Who {
  title: string
}

interface Props {
  whoIsEntitleds: Who[]
}

export function Section4({ whoIsEntitleds }: Props) {
  return (
    <section className="bg-second">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <Image
          alt=""
          src="/ex_01.jpeg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover object-top rounded-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-main mb-8">
            Quem tem direito?
          </h2>
          {whoIsEntitleds.map(who => (
            <p key={who.title} className="text-lg mb-4 flex ">
              <RiArrowRightSFill className="w-8 h-8 text-main" />
              <span className="w-full">
                {who.title}
              </span>
            </p>
          ))}
          <a
            href={`https://api.whatsapp.com/send?phone=351939559818`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-main text-white border border-main inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  )
}