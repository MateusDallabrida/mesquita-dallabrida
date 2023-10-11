import { MdSearch, MdOutlineCompassCalibration, MdLanguage } from 'react-icons/md'
import { Highlight } from '@/components/Highlight'
import { Zen_Antique } from 'next/font/google'
const zenAntique = Zen_Antique({ subsets: ['latin'], weight: '400' })

export function Banner() {
  return (
    <div className="h-[calc(100vh-104px)] bg-second flex flex-col">
      <div className="relative">
        <div className="w-full h-[512px] bg-black opacity-70 absolute" />
        <video src="/video.mp4" autoPlay muted loop className="w-full h-[512px] object-cover" />
        <div className="absolute top-[10%] left-[25%] flex items-center">
          <h1 className={`${zenAntique.className} text-[256px] text-white`}>
            M|D
          </h1>
          <div className="ml-12">
            <p className="w-[460px] text-white font-black text-2xl leading-9">
              Transforme seu sonho em realidade e tenha um mundo de oportunidades ao conquistar seu passaporte europeu.
            </p>
            <p className="w-[460px] text-white font-medium mt-4">
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

      <div className="flex-grow">
        <div className="h-full max-w-7xl mx-auto flex justify-between items-center">
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