import { Zen_Antique } from 'next/font/google'
const zenAntique = Zen_Antique({ subsets: ['latin'], weight: '400' })

interface Props {
  apresentation: {
    heading: string
    caption: string
    phone: number
    video: {
      url: string
    }
  }
}

export function Banner({ apresentation }: Props) {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-112px)] flex flex-col justify-center items-center">
      <div className="absolute w-full h-full bg-black opacity-50" />
      <video preload="auto" playsInline autoPlay muted loop className="w-full h-full object-cover">
        <source src={apresentation.video.url} type="video/mp4" />
      </video>
      <div className="absolute flex max-w-[420px] lg:max-w-[972px] gap-6 lg:gap-12 flex-col lg:flex-row items-center px-4 sm:px-0">
        <h1 className={`${zenAntique.className} text-[128px] lg:text-[256px] text-white leading-none`}>
          M|D
        </h1>
        <div>
          <p className="text-white text-justify font-black text-md md:text-lg lg:text-2xl leading-6">
            {apresentation.heading}
          </p>
          <p className="text-white text-sm lg:text-base font-medium mt-4">
            {apresentation.caption}
          </p>
          <div className="w-full flex justify-center lg:block">
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
    </section>
  )
}