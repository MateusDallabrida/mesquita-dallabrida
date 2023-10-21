import { MdSearch, MdOutlineCompassCalibration, MdLanguage } from 'react-icons/md'
import { Highlight } from '@/components/Highlight'

interface quality {
  heading: string
  caption: string
}

interface Props {
  qualities: quality[]
}

export function Qualities({ qualities }: Props) {
  return (
    <section className="bg-second py-16">
      <div className="md:flex-grow py-16 md:py-0">
        <div className="h-full max-w-7xl mx-auto px-4 xl:px-0 flex flex-col md:flex-row gap-16 md:gap-3 lg:gap-6 xl:gap-12 items-center">
          <Highlight
            icon={<MdSearch className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title={qualities[0].heading}
            body={qualities[0].caption}
          />
          <Highlight
            icon={<MdOutlineCompassCalibration className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title={qualities[1].heading}
            body={qualities[1].caption}
          />
          <Highlight
            icon={<MdLanguage className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title={qualities[2].heading}
            body={qualities[2].caption}
          />
        </div>
      </div>
    </section>
  )
}