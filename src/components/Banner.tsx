import { MdSearch, MdOutlineCompassCalibration, MdLanguage } from 'react-icons/md'
import { Highlight } from '@/components/Highlight'
import { Zen_Antique } from 'next/font/google'
const zenAntique = Zen_Antique({ subsets: ['latin'], weight: '400' })

// interface quality {
//   heading: string
//   caption: string
// }

interface Props {
  apresentation: {
    heading: string
    caption: string
    phone: number
    video: {
      url: string
    }
  }
  // qualities: quality[]
}

export function Banner({ apresentation }: Props) {

  return (
    <section className="h-auto md:h-[calc(100vh-120px)] bg-second flex flex-col">
      <div className="relative">
        <div className="w-full h-[512px] bg-black opacity-70 absolute" />
        {/* <video src={apresentation.video.url} autoPlay muted loop className="w-full h-[512px] object-cover" /> */}
        <div className="absolute top-[calc(50%-92px)] lg:top-[calc(50%-192px)] left-[calc(50%-175px)] md:left-[calc(50%-190px)] lg:left-[calc(50%-486px)] flex items-center">
          <h1 className={`${zenAntique.className} text-[256px] text-white hidden lg:block`}>
            M|D
          </h1>
          <div className="lg:ml-12">
            <p className="w-[350px] md:w-[380px] lg:w-[460px] text-white font-black text-lg md:text-xl lg:text-2xl leading-7 lg:leading-9">
              {apresentation.heading}
            </p>
            <p className="w-[350px] md:w-[380px] lg:w-[460px] text-white text-sm lg:text-base font-medium mt-4">
              {apresentation.caption}
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${apresentation.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-main text-white inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* <div className="md:flex-grow py-16 md:py-0">
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
      </div> */}
    </section>
  )
}