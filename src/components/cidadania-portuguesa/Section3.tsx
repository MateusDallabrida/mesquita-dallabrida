import { Highlight } from "@/components/Highlight"
import { MdSearch, MdFlag, MdSource, MdCheckCircle, MdMap } from 'react-icons/md'

interface Quality {
  type: string
  heading: string
  caption: string
}

interface Props {
  qualities: Quality[]
}

export function Section3({ qualities }: Props) {
  const q = [...qualities].filter(quality => quality.type === "cidadania-portuguesa")
  return (
    <section className="bg-second">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-main">
          O seu processo de nacionalidade não precisa ser difícil.
        </h2>
        <p className="text-lg text-center">
          Entenda qual é a nossa parte, o passo a passo de tudo que vamos acompanhar e fazer por você.
        </p>
        <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-16 mt-8">
          {q.map(quality => (
            <Highlight
              key={quality.heading}
              icon={<MdFlag className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
              title={quality.heading}
              body=""
            />
          ))}
        </div>
      </div>

    </section>
  )
}