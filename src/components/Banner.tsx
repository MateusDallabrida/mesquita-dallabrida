import { MdSearch, MdOutlineCompassCalibration, MdLanguage } from 'react-icons/md'
import { Highlight } from '@/components/Highlight'
import { Zen_Antique } from 'next/font/google'
const zenAntique = Zen_Antique({ subsets: ['latin'], weight: '400' })

export function Banner() {
  return (
    <div className="h-auto md:h-[calc(100vh-104px)] bg-second flex flex-col">
      <div className="relative">
        <div className="w-full h-[512px] bg-black opacity-70 absolute" />
        <video src="/video.mp4" autoPlay muted loop className="w-full h-[512px] object-cover" />
        <div className="absolute top-[calc(50%-92px)] lg:top-[calc(50%-192px)] left-[calc(50%-190px)] lg:left-[calc(50%-486px)] flex items-center">
          <h1 className={`${zenAntique.className} text-[256px] text-white hidden lg:block`}>
            M|D
          </h1>
          <div className="lg:ml-12">
            <p className="w-[380px] lg:w-[460px] text-white font-black text-xl lg:text-2xl leading-7 lg:leading-9">
              Transforme seu sonho em realidade e tenha um mundo de oportunidades ao conquistar seu passaporte europeu.
            </p>
            <p className="w-[380px] lg:w-[460px] text-white text-sm lg:text-base font-medium mt-4">
            Um investimento em você e um legado para o futuro.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-main text-white inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex-grow py-16 md:py-0">
        <div className="h-full max-w-7xl mx-auto px-4 xl:px-0 flex flex-col md:flex-row gap-16 md:gap-3 lg:gap-6 xl:gap-12 items-center">
          <Highlight
            icon={<MdSearch className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Pesquisa"
            body="Realizamos a pesquisa de genealogia para determinar se você possui elegibilidade para a obter a cidadania."
          />
          <Highlight
            icon={<MdOutlineCompassCalibration className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Acompanhamento"
            body="Assistência e suporte ao longo de todo o procedimento de obtenção de nacionalidade."
          />
          <Highlight
            icon={<MdLanguage className="w-12 h-12 text-main absolute top-[calc(50%-24px)] left-[calc(50%-24px)]" />}
            title="Deferimento do Processo"
            body="Após ter sua dupla cidadania deferida, te entregaremos um passo a passo de como solicitar seu passaporte europeu."
          />
        </div>
      </div>
    </div>
  )
}