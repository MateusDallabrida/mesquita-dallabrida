import { MdSearch } from 'react-icons/md'
import { Highlight } from '@/components/Highlight'

interface Quality {
  type: string
  heading: string
  caption: string
}

interface Props {
  qualities: Quality[]
}

export function Qualities({ qualities }: Props) {
  const q = [...qualities].filter(quality => quality.type === "banner")
  return (
    <section className="bg-second py-16">
      <div className="md:flex-grow py-16 md:py-0">
        <div className="h-full max-w-7xl mx-auto px-4 xl:px-0 flex flex-col md:flex-row gap-16 md:gap-3 lg:gap-6 xl:gap-12 items-center">
          {q.map(quality => (
            <Highlight
              key={quality.heading}
              icon={<MdSearch className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
              title={quality.heading}
              body={quality.caption}
            />
          ))}
        </div>
      </div>
    </section>
  )
}