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
    <section className="h-[calc(100vh-64px)] sm:h-[calc(100vh-112px)] bg-second flex flex-col relative">
      <div className="w-full h-full bg-black opacity-50 absolute" />
      <video src={apresentation.video.url} autoPlay muted loop className="w-full h-full object-cover" />
      <div className="absolute top-[calc(50%-236px)] left-[calc(50%-175px)] sm:left-[calc(50%-190px)] lg:left-[calc(50%-486px)] flex items-center flex-col lg:flex-row">
        <h1 className={`${zenAntique.className} text-[128px] sm:text-[192px] lg:text-[256px] text-white`}>
          M|D
        </h1>
        <div className="lg:ml-12">
          <p className="w-[350px] md:w-[380px] lg:w-[460px] text-white font-black text-lg md:text-xl lg:text-2xl leading-7 lg:leading-9">
            {apresentation.heading}
          </p>
          <p className="w-[350px] md:w-[380px] lg:w-[460px] text-white text-sm lg:text-base font-medium mt-4">
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