import Image from "next/image"
import { MdLocationOn } from "react-icons/md"

interface Person {
  image: {
    url: string
  }
  name: string
  caption: string
  description: string
}

interface Props {
  ourTeams: Person[]
}

export function OurTeam({ ourTeams }: Props) {
  return (
    <section className="bg-second">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-5xl font-bold uppercase text-main text-center">
          Nossa Equipe
        </h2>

        <div className="mt-12 md:grid grid-cols-2 gap-12">
          {ourTeams.map((person: Person) => (
            <div key={person.name} className="flex flex-col gap-6 items-center">
              <Image
                src={person.image.url}
                alt="Foto de perfil do doutor Mateus Dallabrida"
                width={0}
                height={0}
                sizes="100vw"
                className="w-32 h-32 rounded-full bg-white"
              />

              <div>
                <strong className="text-2xl font-bold text-main uppercase">
                  {person.name}
                </strong>
                <p className="text-gray-900 uppercase text-center mt-2">
                  {person.caption}
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <MdLocationOn className="w-8 h-8 text-main" />
                <p className="text-main font-bold uppercase">
                  Portugal
                </p>
              </div>

              <p className="text-lg text-gray-900 leading-8 text-justify px-8">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}